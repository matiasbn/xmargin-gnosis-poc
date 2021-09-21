/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MultiSend, MultiSendInterface } from "../MultiSend";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "transactions",
        type: "bytes",
      },
    ],
    name: "multiSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b503073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060805160601c61036f61006560003960006041015261036f6000f3fe60806040526004361061001e5760003560e01c80638d80ff0a14610023575b600080fd5b61003d600480360381019061003891906101c2565b61003f565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614156100ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100c590610269565b60405180910390fd5b805160205b81811015610155578083015160f81c6001820184015160601c601583018501516035840186015160558501870160008560008114610118576001811461012857610133565b6000808585888a5af19150610133565b6000808585895af491505b50600081141561014257600080fd5b82605501870196505050505050506100d3565b505050565b600061016d610168846102ba565b610289565b90508281526020810184848401111561018557600080fd5b6101908482856102fb565b509392505050565b600082601f8301126101a957600080fd5b81356101b984826020860161015a565b91505092915050565b6000602082840312156101d457600080fd5b600082013567ffffffffffffffff8111156101ee57600080fd5b6101fa84828501610198565b91505092915050565b60006102106030836102ea565b91507f4d756c746953656e642073686f756c64206f6e6c792062652063616c6c65642060008301527f7669612064656c656761746563616c6c000000000000000000000000000000006020830152604082019050919050565b6000602082019050818103600083015261028281610203565b9050919050565b6000604051905081810181811067ffffffffffffffff821117156102b0576102af61030a565b5b8060405250919050565b600067ffffffffffffffff8211156102d5576102d461030a565b5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b82818337600083830152505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea264697066735822122010686a7d32c43ed50d08653dd2ffa8b95530038d0316a2e3132e6b1ede0d91ec64736f6c63430008000033";

export class MultiSend__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MultiSend> {
    return super.deploy(overrides || {}) as Promise<MultiSend>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MultiSend {
    return super.attach(address) as MultiSend;
  }
  connect(signer: Signer): MultiSend__factory {
    return super.connect(signer) as MultiSend__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSendInterface {
    return new utils.Interface(_abi) as MultiSendInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiSend {
    return new Contract(address, _abi, signerOrProvider) as MultiSend;
  }
}