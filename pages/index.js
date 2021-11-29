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

  const contractAddress = "0x2a2F7aA6709de7e36B9Ce6fb81BAF09c1debF547";
  const tokenByETH = 0.000025;
  let web3;
  let prisaleContract;

  const [walletAddress, setWalletAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState(0);

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
    console.log(installMetaMask);
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
      const response = await prisaleContract.methods.airdrop().send({ from: walletAddress });
      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }
  
  const getAirdropStatus = async () => {
    try {
      if (await checkAccount() == false) {
        return false;
      }
      const response = await prisaleContract.methods.getAirdropStatus(walletAddress).call();
      console.log(response);
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
        <p>You have already claimed your airdrops, use your referral link to get some more.</p>
      </Modal>
    </ThemeProvider>
  );
};

export default Home;
