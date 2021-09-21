/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StorageAccessible,
  StorageAccessibleInterface,
} from "../StorageAccessible";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "getStorageAt",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "calldataPayload",
        type: "bytes",
      },
    ],
    name: "simulateAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610555806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635624b25b1461003b578063b4faba091461006b575b600080fd5b6100556004803603810190610050919061024d565b610087565b60405161006291906102c2565b60405180910390f35b610085600480360381019061008091906101f9565b610145565b005b606060006020836100989190610361565b67ffffffffffffffff8111156100d7577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156101095781602001600182028036833780820191505090505b50905060005b8381101561013a5780850154806020830260208501015250808061013290610439565b91505061010f565b508091505092915050565b600080825160208401855af4806000523d6020523d600060403e60403d016000fd5b600061017a61017584610315565b6102e4565b90508281526020810184848401111561019257600080fd5b61019d8482856103f7565b509392505050565b6000813590506101b4816104f1565b92915050565b600082601f8301126101cb57600080fd5b81356101db848260208601610167565b91505092915050565b6000813590506101f381610508565b92915050565b6000806040838503121561020c57600080fd5b600061021a858286016101a5565b925050602083013567ffffffffffffffff81111561023757600080fd5b610243858286016101ba565b9150509250929050565b6000806040838503121561026057600080fd5b600061026e858286016101e4565b925050602061027f858286016101e4565b9150509250929050565b600061029482610345565b61029e8185610350565b93506102ae818560208601610406565b6102b7816104e0565b840191505092915050565b600060208201905081810360008301526102dc8184610289565b905092915050565b6000604051905081810181811067ffffffffffffffff8211171561030b5761030a6104b1565b5b8060405250919050565b600067ffffffffffffffff8211156103305761032f6104b1565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061036c826103ed565b9150610377836103ed565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156103b0576103af610482565b5b828202905092915050565b60006103c6826103cd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610424578082015181840152602081019050610409565b83811115610433576000848401525b50505050565b6000610444826103ed565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561047757610476610482565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6104fa816103bb565b811461050557600080fd5b50565b610511816103ed565b811461051c57600080fd5b5056fea26469706673582212203ba770a3b9fae48dd08793ceaefdcc685b29244175fcb09852170ad5913d085664736f6c63430008000033";

export class StorageAccessible__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StorageAccessible> {
    return super.deploy(overrides || {}) as Promise<StorageAccessible>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StorageAccessible {
    return super.attach(address) as StorageAccessible;
  }
  connect(signer: Signer): StorageAccessible__factory {
    return super.connect(signer) as StorageAccessible__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StorageAccessibleInterface {
    return new utils.Interface(_abi) as StorageAccessibleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StorageAccessible {
    return new Contract(address, _abi, signerOrProvider) as StorageAccessible;
  }
}