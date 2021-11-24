import React, { useEffect, useState } from "react";
import { AbiItem, toWei } from 'web3-utils';
import Web3 from "web3";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navigation from "containers/Navigation";
import Banner from 'containers/Banner';
import Service from "containers/Service";
import CoinFund from "containers/CoinFund";
import About from "containers/About";
import Awards from "containers/Awards";
import UserMap from "containers/UserMap";
import Wallet from "containers/Wallet";
import Statistics from "containers/Statistics";
import Stack from "containers/Stack"; 
import Faq from "containers/Faq";
import Footer from "containers/Footer";

import FavIcon from "assets/images/fav-icon.svg";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

import PresaleContract from "../contract/abi/presale.abi.json";

const Home = () => {

  const contractAddress = "0x1d212928E19d354E35702A9Cf637002192425a0C";
  let web3;

  const [walletAddress, setWalletAddress] = useState("");

  useEffect(async () => {
    try {
      await checkAccount();
    } catch(e) {
      console.log(e);
    }
  }, []);

  async function checkAccount() {
    try {
      if (window.ethereum) {
        await connectWallet();
      }
      const accounts = await web3.eth.getAccounts();
      setWalletAddress(accounts[0]);
    } catch(e) {
      console.log(e);
    }
  }

  const connectWallet = async() => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        web3 = new Web3(window.ethereum);
      } catch (err) {
        console.log('user did not add account...', err)
      }
    } else {
      checkAccount();
    }
  }

  const getFreeToken = async() => {
    try {
      await checkAccount();
      const presaleContract = new web3.eth.Contract(
        PresaleContract.abi,
        contractAddress
      );
      const response = await presaleContract.methods.airdrop().send({ from: walletAddress }).on('error', function () {
        console.log('approve failed');
      })
      .on('receipt', function () {
        window.localStorage.setItem('approveFlag', 'true');
        console.log('approve  uccess');
      });
      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }

  const buyToken = async() => {
    try {
      await checkAccount();

      const presaleContract = new web3.eth.Contract(
        PresaleContract.abi,
        contractAddress
      );

      const amount = buyAmount; 
      const price = 0.00001 * amount;
      console.log(contractAddress);
      const response = await presaleContract.methods.presale(amount).send({ 
        from: walletAddress,
        value: toWei(price.toString(), "ether"),
        gas: 300000,
      });
      console.log(response);
      console.log("buyToken end");

      await getPresaledAmount();
      await getRemainPresalAmount();
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>LevenToken ICO</title>
        <meta name="Description" content="A User Owned Decentralized Settlement Network For Real World Payments" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>

      <GlobalStyle />
      <Navigation connectWallet = {checkAccount} walletAddress = {walletAddress} />
      <Banner getFreeToken = {getFreeToken} />
      <Service />
      <CoinFund />
      <About />
      <Awards />
      <UserMap />
      <Wallet />
      <Statistics />
       <Faq />
      <Stack />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
