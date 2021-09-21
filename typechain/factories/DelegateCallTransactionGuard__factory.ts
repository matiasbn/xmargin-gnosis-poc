/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DelegateCallTransactionGuard,
  DelegateCallTransactionGuardInterface,
} from "../DelegateCallTransactionGuard";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "allowedTarget",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "checkAfterExecution",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "checkTransaction",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161094838038061094883398181016040528101906100329190610084565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050506100f6565b60008151905061007e816100df565b92915050565b60006020828403121561009657600080fd5b60006100a48482850161006f565b91505092915050565b60006100b8826100bf565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100e8816100ad565b81146100f357600080fd5b50565b60805160601c61082d61011b600039600081816101ad015261024b015261082d6000f3fe608060405234801561001057600080fd5b50600436106100505760003560e01c806301ffc9a71461005357806373a8c6821461008357806375f0bb52146100a157806393271368146100bd57610051565b5b005b61006d60048036038101906100689190610540565b6100d9565b60405161007a91906105e2565b60405180910390f35b61008b6101ab565b60405161009891906105c7565b60405180910390f35b6100bb60048036038101906100b691906103e4565b6101cf565b005b6100d760048036038101906100d29190610504565b6102e5565b005b60007fe6d7a83a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806101a457507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600180811115610208577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b886001811115610241577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14158061029957507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff16145b6102d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cf906105fd565b60405180910390fd5b5050505050505050505050565b5050565b60006102fc6102f78461064e565b61061d565b90508281526020810184848401111561031457600080fd5b61031f84828561071f565b509392505050565b6000813590506103368161075d565b92915050565b60008135905061034b81610774565b92915050565b6000813590506103608161078b565b92915050565b600081359050610375816107a2565b92915050565b60008135905061038a816107b9565b92915050565b600082601f8301126103a157600080fd5b81356103b18482602086016102e9565b91505092915050565b6000813590506103c9816107d0565b92915050565b6000813590506103de816107e0565b92915050565b60008060008060008060008060008060006101608c8e03121561040657600080fd5b60006104148e828f01610327565b9b505060206104258e828f016103cf565b9a505060408c013567ffffffffffffffff81111561044257600080fd5b61044e8e828f01610390565b995050606061045f8e828f016103ba565b98505060806104708e828f016103cf565b97505060a06104818e828f016103cf565b96505060c06104928e828f016103cf565b95505060e06104a38e828f01610327565b9450506101006104b58e828f0161033c565b9350506101208c013567ffffffffffffffff8111156104d357600080fd5b6104df8e828f01610390565b9250506101406104f18e828f01610327565b9150509295989b509295989b9093969950565b6000806040838503121561051757600080fd5b600061052585828601610366565b925050602061053685828601610351565b9150509250929050565b60006020828403121561055257600080fd5b60006105608482850161037b565b91505092915050565b6105728161068f565b82525050565b610581816106b3565b82525050565b600061059460178361067e565b91507f546869732063616c6c20697320726573747269637465640000000000000000006000830152602082019050919050565b60006020820190506105dc6000830184610569565b92915050565b60006020820190506105f76000830184610578565b92915050565b6000602082019050818103600083015261061681610587565b9050919050565b6000604051905081810181811067ffffffffffffffff821117156106445761064361072e565b5b8060405250919050565b600067ffffffffffffffff8211156106695761066861072e565b5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b600061069a826106f5565b9050919050565b60006106ac826106f5565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107668161068f565b811461077157600080fd5b50565b61077d816106a1565b811461078857600080fd5b50565b610794816106b3565b811461079f57600080fd5b50565b6107ab816106bf565b81146107b657600080fd5b50565b6107c2816106c9565b81146107cd57600080fd5b50565b600281106107dd57600080fd5b50565b6107e981610715565b81146107f457600080fd5b5056fea26469706673582212201bbaa4caf39e8eb8f52539fda6013ab4da003073285d1341d2518c640667990a64736f6c63430008000033";

export class DelegateCallTransactionGuard__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DelegateCallTransactionGuard> {
    return super.deploy(
      target,
      overrides || {}
    ) as Promise<DelegateCallTransactionGuard>;
  }
  getDeployTransaction(
    target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(target, overrides || {});
  }
  attach(address: string): DelegateCallTransactionGuard {
    return super.attach(address) as DelegateCallTransactionGuard;
  }
  connect(signer: Signer): DelegateCallTransactionGuard__factory {
    return super.connect(signer) as DelegateCallTransactionGuard__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DelegateCallTransactionGuardInterface {
    return new utils.Interface(_abi) as DelegateCallTransactionGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DelegateCallTransactionGuard {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DelegateCallTransactionGuard;
  }
}
