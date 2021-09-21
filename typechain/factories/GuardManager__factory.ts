/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GuardManager, GuardManagerInterface } from "../GuardManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "guard",
        type: "address",
      },
    ],
    name: "ChangedGuard",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guard",
        type: "address",
      },
    ],
    name: "setGuard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104b6806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e19a9dd914610030575b600080fd5b61004a60048036038101906100459190610271565b61004c565b005b6100546101d7565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610171578073ffffffffffffffffffffffffffffffffffffffff166301ffc9a77fe6d7a83a000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016100e1919061037c565b60206040518083038186803b1580156100f957600080fd5b505afa15801561010d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610131919061029a565b610170576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610167906103b7565b60405180910390fd5b5b60007f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c860001b90508181557f1151116914515bc0891ff9047a6cb32cf902546f83066499bcf8ba33d2353fa2826040516101cb9190610361565b60405180910390a15050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610245576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023c90610397565b60405180910390fd5b565b60008135905061025681610452565b92915050565b60008151905061026b81610469565b92915050565b60006020828403121561028357600080fd5b600061029184828501610247565b91505092915050565b6000602082840312156102ac57600080fd5b60006102ba8482850161025c565b91505092915050565b6102cc816103e8565b82525050565b6102db81610406565b82525050565b60006102ee6005836103d7565b91507f47533033310000000000000000000000000000000000000000000000000000006000830152602082019050919050565b600061032e6005836103d7565b91507f47533330300000000000000000000000000000000000000000000000000000006000830152602082019050919050565b600060208201905061037660008301846102c3565b92915050565b600060208201905061039160008301846102d2565b92915050565b600060208201905081810360008301526103b0816102e1565b9050919050565b600060208201905081810360008301526103d081610321565b9050919050565b600082825260208201905092915050565b60006103f382610432565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b61045b816103e8565b811461046657600080fd5b50565b610472816103fa565b811461047d57600080fd5b5056fea2646970667358221220cbfc18c1e4e959bf4f828dedc4b6a9e9a9705db4ab323993199533f70d12f98864736f6c63430008000033";

export class GuardManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GuardManager> {
    return super.deploy(overrides || {}) as Promise<GuardManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GuardManager {
    return super.attach(address) as GuardManager;
  }
  connect(signer: Signer): GuardManager__factory {
    return super.connect(signer) as GuardManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuardManagerInterface {
    return new utils.Interface(_abi) as GuardManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuardManager {
    return new Contract(address, _abi, signerOrProvider) as GuardManager;
  }
}
