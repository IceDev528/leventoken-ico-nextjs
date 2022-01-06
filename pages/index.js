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
import RoadMap from "containers/UserMap";
import Wallet from "containers/Wallet";
import Statistics from "containers/Statistics";
import Stack from "containers/Stack"; 
import Faq from "containers/Faq";
import Footer from "containers/Footer";
import FavIcon from "assets/images/fav-icon.svg";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";
import Modal from 'react-modal';
import PresaleContract from "../contract/abi/presale.abi.json";
import PrisaleContract from "../contract/abi/prisale.abi.json";

Modal.setAppElement('body');

const Home = () => {

  const contractAddress = "0xE425f9721F0c91B5AD14b7cD53673Ea5184adC0D";
  const tokenByETH = 0.00001875;
  let web3;
  let prisaleContract;

  const [walletAddress, setWalletAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState(0);
  let isAirdrop = false;

  useEffect(async () => {
    try {
      await checkAccount();
    } catch(e) {
      console.log(e);
    }
  }, []);

  async function checkAccount() {
    try {
      if (await checkMetaMask() == true) {
        if (window.ethereum) {
          if (await connectWallet() == false) {
            return false;
          }
        }
        const accounts = await web3.eth.getAccounts();
        setWalletAddress(accounts[0]);
        return true;
      } else {
        alert("Please install MetaMask!");
        return false;
      }
    } catch(e) {
      console.log(e);
    }
    return false;
  }

  const checkMetaMask = async() => {
    return true;
  }

  const connectWallet = async() => {
    const installMetaMask = await checkMetaMask();
    if (installMetaMask == false) {
      return false;
    }
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        web3 = new Web3(window.ethereum);
        prisaleContract = new web3.eth.Contract(
          PrisaleContract.abi,
          contractAddress
        );
      } catch (err) {
        console.log('user did not add account...', err)
      }
    } else {
      checkAccount();
    }
  }

  const getFreeToken = async() => {
    try {
      if (await checkAccount() == false) {
        return false;
      }
      const airdropStatus = await getAirdropStatus();
      if (airdropStatus == true) {
        openModal();
        return false;
      }
      if (await checkAccount() == false) {
        return false;
      }
      if (isAirdrop === true) {
        return false;
      }
      console.log(isAirdrop);
      isAirdrop = true;
      const response = await prisaleContract.methods.airdrop().send({ from: walletAddress });
      console.log(response);
    } catch(e) {
      console.log(e);
    }
    isAirdrop = false;
  }
  
  const getAirdropStatus = async () => {
    try {
      if (await checkAccount() == false) {
        return false;
      }
      const response = await prisaleContract.methods.getAirdropStatus(walletAddress).call();
      return response;
    } catch(e) {
      console.log(e);
    }

    return true;
  }

  const buyToken = async() => {
    try {
      if (await checkAccount() == false) {
        return false;
      }

      const amount = tokenAmount; 
      const price = tokenByETH * amount;
      console.log(contractAddress);
      const response = await prisaleContract.methods.prisale(amount).send({ 
        from: walletAddress,
        value: toWei(price.toString(), "ether"),
        gas: 300000,
      });
      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#290E59',
      textAlign: 'center',
      minWidth: '300px',
      borderRadius: '15px'
    },
    alert: {
      color: '#fff'
    },
    close: {
      color: 'white',
      position: 'absolute',
      top: '0',
      right: '0',
      width: 'fit-content'
    },
    highlight: {
      border: '2px solid red'
    }
  };
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const importToken = async () => {
    const tokenAddress = '0x4b3f7F7816701d1fD665f0AD6dD046Af9Cab3999';
    const tokenSymbol = 'LEVEN';
    const tokenDecimals = 18;
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
          },
        },
      });

      if (wasAdded) {
        console.log('Thanks for your interest!');
        window.location.href = "https://docs.google.com/forms/d/1C47EVLSb8qa8aW5vMgKCjepvQq-pZdvKzYehCpSJr18/edit";
      } else {
        console.log('Your loss!');
      }
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
      <Navigation 
        connectWallet = {checkAccount} 
        walletAddress = {walletAddress} 
      />
      <Banner 
        getFreeToken = {getFreeToken}
        importToken = {importToken}
        tokenAmount = {tokenAmount} 
        setTokenAmount = {setTokenAmount} 
        checkAccount = {checkAccount}
        buyToken = {buyToken}
        tokenByETH = {tokenByETH} 
      />
      <Service />
      <CoinFund />
      <About />
      {/* <Awards /> */}
      {/* <UserMap /> */}
      <Wallet />
      <RoadMap />
      <Statistics />
      <Faq />
      <Stack />
      <Footer />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Airdrop alert"
      >
        <button onClick={closeModal} style={modalStyles.close}>✗</button>
        <h2 style={modalStyles.alert}>Airdrop Notification</h2>
        <p>You have already claimed your airdrops, get a referral link, share and get some more. All your friends get 1000 free Leven Tokens too. You have to use the import link to import your tokens to your wallet</p>
        <a href="https://leventoken.com/" target="_blank">https://leventoken.com/</a>
      </Modal>
    </ThemeProvider>
  );
};

export default Home;
