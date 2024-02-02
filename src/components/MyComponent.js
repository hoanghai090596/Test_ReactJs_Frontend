import React from "react";
import ChildComponent from "./ChildComponent";
import SecondComponent from "./SencondComponent";
import AddComponent from "./AddComponent";
import Product from "../services/Product";
import axios from "axios";

class MyComponent extends React.Component {
  state = {
    arJob: [
      {
        id: "Job1",
        title: "developer",
      },
      {
        id: "Job2",
        title: "worker",
      },
      {
        id: "Job3",
        title: "builder",
      },
    ],
    showJob: true,
  };

  addNewJob = (item) => {
    console.log("check job");
    let currentJob = this.state.arJob;
    currentJob.push(item);
    this.setState({
      arJob: currentJob,
    });
  };

  handleShowInfo = (isShow) => {
    this.setState({
      showJob: isShow,
    });
  };

  getproduct = async () => {
    console.log("login");

    // myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
    // myHeaders.append("Access-Control-Allow-Credentials", "true");
    var raw = '{\r\n        "password": "GA4HUtqRAW35KfPltNmJ"\r\n      }';

    // this.apiCall(
    //   "https://demomb.vnpay.vn:20157/v1/auth/userpass/login/PE1118CC50023",
    //   requestOptions
    // );
    this.apiCall(
      "https://demomb.vnpaytest.vn/vbaapigw/authen-service/1204",
      JSON.stringify({
        d: "tb/NAO4tiOofe+eb+Rlfy7ccYBVV3qw30xu3t9llkPdap0quLTnWRi4fVZWjiRAZfMamvKdab2kisfds2nynVh/RiJ+KSijcjPcPATTYKzrng3wWbL1tYLPbK4kmonDGYSP6mdfTUOg4g6jiXpS0vrudQJ3LATG/dta8uPzdWyxtV6aIpzV0rxviRrgbs8aOvYB74TtGzQwjQq5nIPflopu71tzVkV3le5WILS6nXVR+D3S2RrKa6/04ArzNDlAzVcRPKQD2DOjth5SK0cdAkWtO+dJhHahdNttFsjQZDP97d1iFMiyxKN//eqM1ITdg1Aqe2AI5n2ciqNW2E3xECoqVnB/zjGulhkGBU8Wzu5unTkwxwi788qYohGgfJ3EUuSDvMo6I+heKm2k5uP6rUKQpdzFP0kkO/s2Rct3v3CDFasnNZhI99iBlQpCiExoqhVMw7ZgIpw2TK82fWj4y6yrwWnPZx2/Et4S+BJMqnWEFVL4Vhqm0ZJvhQiMkVr9UE8qcEDsacYwu8Dr70S1yEHnM8xzJi+0vpC6VbZpjNsLHxCRWIpN84dMNjuLH/IvLkLcgxTpHIEQz90FURpWc1JQJpU/cZc+JWEREliTZNxQmgaHb7kHLND7d/N4KgRb/DPnBFEp50r29MablPXXb9TrUye7TyIUF8JtJXtatwoXqMAXEZe6xZZGSohi58jS10Rayx41ASt1B+UvpdB37euhldHkScjmTrrVZNxbBsz2anBGC659KC1Ti0bQ/",
        k: "Ytgr3PsMWjJMW+gCG+ZdzU/WDC/9LhrbzSVGT5dRm3W3fGut8TDPVqh511K2DDtiT3LbzunIzougckfT+KTs0PYC/rMVYsPFqXfHc7yFx4zyBXErIpY0FLYxAvOU6V2HcH7831Ar7FMNFj32uzJhjK2WBA9BoNOAOcA9Izp69m687u8/lb70gyTGBurz8FJCXWYrqoHT9bquKTorL16o2eIEPRISttognDsHsRRUaBKkiVKEWF5Se020kD10d2lX625QaxV/J3Hnvi9o/7CXD9bJNtlMYtOPasC12l2r7NtFnORKarnIcoXl6fbggZdg2Au14DIQQvKQxq+PJAPbzA==",
      })
    );

    // axios.post(
    //   "https://demomb.vnpay.vn:20157/v1/auth/userpass/login/PE1118CC50023",
    //   { password: "GA4HUtqRAW35KfPltNmJ" }
    // );
    // axios({
    //   method: "post",

    //   url: "https://demomb.vnpaytest.vn/vbaapigw/authen-service/1204",
    //   data: {
    //     d: "tb/NAO4tiOofe+eb+Rlfy7ccYBVV3qw30xu3t9llkPdap0quLTnWRi4fVZWjiRAZfMamvKdab2kisfds2nynVh/RiJ+KSijcjPcPATTYKzrng3wWbL1tYLPbK4kmonDGYSP6mdfTUOg4g6jiXpS0vrudQJ3LATG/dta8uPzdWyxtV6aIpzV0rxviRrgbs8aOvYB74TtGzQwjQq5nIPflopu71tzVkV3le5WILS6nXVR+D3S2RrKa6/04ArzNDlAzVcRPKQD2DOjth5SK0cdAkWtO+dJhHahdNttFsjQZDP97d1iFMiyxKN//eqM1ITdg1Aqe2AI5n2ciqNW2E3xECoqVnB/zjGulhkGBU8Wzu5unTkwxwi788qYohGgfJ3EUuSDvMo6I+heKm2k5uP6rUKQpdzFP0kkO/s2Rct3v3CDFasnNZhI99iBlQpCiExoqhVMw7ZgIpw2TK82fWj4y6yrwWnPZx2/Et4S+BJMqnWEFVL4Vhqm0ZJvhQiMkVr9UE8qcEDsacYwu8Dr70S1yEHnM8xzJi+0vpC6VbZpjNsLHxCRWIpN84dMNjuLH/IvLkLcgxTpHIEQz90FURpWc1JQJpU/cZc+JWEREliTZNxQmgaHb7kHLND7d/N4KgRb/DPnBFEp50r29MablPXXb9TrUye7TyIUF8JtJXtatwoXqMAXEZe6xZZGSohi58jS10Rayx41ASt1B+UvpdB37euhldHkScjmTrrVZNxbBsz2anBGC659KC1Ti0bQ/",
    //     k: "Ytgr3PsMWjJMW+gCG+ZdzU/WDC/9LhrbzSVGT5dRm3W3fGut8TDPVqh511K2DDtiT3LbzunIzougckfT+KTs0PYC/rMVYsPFqXfHc7yFx4zyBXErIpY0FLYxAvOU6V2HcH7831Ar7FMNFj32uzJhjK2WBA9BoNOAOcA9Izp69m687u8/lb70gyTGBurz8FJCXWYrqoHT9bquKTorL16o2eIEPRISttognDsHsRRUaBKkiVKEWF5Se020kD10d2lX625QaxV/J3Hnvi9o/7CXD9bJNtlMYtOPasC12l2r7NtFnORKarnIcoXl6fbggZdg2Au14DIQQvKQxq+PJAPbzA==",
    //   },
    // });
  };

  apiCall(url, data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  deleteOldJob = (oldJob) => {
    console.log("delete job");
    let currentJob = this.state.arJob;
    currentJob.filter((item) => oldJob.id !== item.id);
    this.setState({
      arJob: currentJob,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>hello html form</div>
        <div>
          <AddComponent
            addNewJob={this.addNewJob}
            callApi={this.getproduct}
            deleteOldJob={this.deleteOldJob}
          />
          {/* <ChildComponent def={this.state.arJob} isShow={this.state.showJob} /> */}
          {/* <Product /> */}
          {/* <SecondComponent
            name={this.state.firstName}
            isShow={this.state.showJob}
          /> */}
          {/* <button onClick={() => this.handleShowInfo(true)}>Show</button>
          <br />
          <button onClick={() => this.handleShowInfo(false)}>Hide</button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default MyComponent;
