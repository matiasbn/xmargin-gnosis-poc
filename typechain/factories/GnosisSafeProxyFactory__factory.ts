/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GnosisSafeProxyFactory,
  GnosisSafeProxyFactoryInterface,
} from "../GnosisSafeProxyFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "singleton",
        type: "address",
      },
    ],
    name: "ProxyCreation",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_singleton",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "calculateCreateProxyWithNonceAddress",
    outputs: [
      {
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "singleton",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "createProxy",
    outputs: [
      {
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_singleton",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
      {
        internalType: "contract IProxyCreationCallback",
        name: "callback",
        type: "address",
      },
    ],
    name: "createProxyWithCallback",
    outputs: [
      {
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_singleton",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "createProxyWithNonce",
    outputs: [
      {
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyCreationCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyRuntimeCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611242806100206000396000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c80631688f0b9146200006f5780632500510e14620000a557806353e5d93514620000db57806361b69abd14620000fd578063addacc0f1462000133578063d18af54d1462000155575b600080fd5b6200008d6004803603810190620000879190620007c0565b6200018b565b6040516200009c919062000b38565b60405180910390f35b620000c36004803603810190620000bd9190620006f2565b62000206565b604051620000d2919062000b38565b60405180910390f35b620000e5620002bb565b604051620000f4919062000b14565b60405180910390f35b6200011b600480360381019062000115919062000766565b620002e8565b6040516200012a919062000b38565b60405180910390f35b6200013d6200038e565b6040516200014c919062000b14565b60405180910390f35b6200017360048036038101906200016d91906200082f565b620003bb565b60405162000182919062000b38565b60405180910390f35b60006200019a848484620004b1565b9050600083511115620001c45760008060008551602087016000865af11415620001c357600080fd5b5b7f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e2358185604051620001f792919062000b55565b60405180910390a19392505050565b6000620002598585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505084620004b1565b9050806040516020016200026e919062000aaa565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002b2919062000bd6565b60405180910390fd5b606060405180602001620002cf90620005d3565b6020820181038252601f19601f82011660405250905090565b600082604051620002f990620005d3565b62000305919062000af7565b604051809103906000f08015801562000322573d6000803e3d6000fd5b5090506000825111156200034d5760008060008451602086016000865af114156200034c57600080fd5b5b7f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e23581846040516200038092919062000b55565b60405180910390a192915050565b606060405180602001620003a290620005e1565b6020820181038252601f19601f82011660405250905090565b6000808383604051602001620003d392919062000ac7565b6040516020818303038152906040528051906020012060001c9050620003fb8686836200018b565b9150600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614620004a8578273ffffffffffffffffffffffffffffffffffffffff16631e52b518838888886040518563ffffffff1660e01b815260040162000473949392919062000b82565b600060405180830381600087803b1580156200048e57600080fd5b505af1158015620004a3573d6000803e3d6000fd5b505050505b50949350505050565b600080838051906020012083604051602001620004d092919062000a4e565b604051602081830303815290604052805190602001209050600060405180602001620004fc90620005d3565b6020820181038252601f19601f820116604052508673ffffffffffffffffffffffffffffffffffffffff166040516020016200053a92919062000a7e565b6040516020818303038152906040529050818151826020016000f59250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415620005ca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005c19062000bfa565b60405180910390fd5b50509392505050565b6102bf8062000ea383390190565b60ab806200116283390190565b600062000605620005ff8462000c50565b62000c1c565b9050828152602081018484840111156200061e57600080fd5b6200062b84828562000d72565b509392505050565b600081359050620006448162000e54565b92915050565b60008083601f8401126200065d57600080fd5b8235905067ffffffffffffffff8111156200067757600080fd5b6020830191508360018202830111156200069057600080fd5b9250929050565b600082601f830112620006a957600080fd5b8135620006bb848260208601620005ee565b91505092915050565b600081359050620006d58162000e6e565b92915050565b600081359050620006ec8162000e88565b92915050565b600080600080606085870312156200070957600080fd5b6000620007198782880162000633565b945050602085013567ffffffffffffffff8111156200073757600080fd5b62000745878288016200064a565b935093505060406200075a87828801620006db565b91505092959194509250565b600080604083850312156200077a57600080fd5b60006200078a8582860162000633565b925050602083013567ffffffffffffffff811115620007a857600080fd5b620007b68582860162000697565b9150509250929050565b600080600060608486031215620007d657600080fd5b6000620007e68682870162000633565b935050602084013567ffffffffffffffff8111156200080457600080fd5b620008128682870162000697565b92505060406200082586828701620006db565b9150509250925092565b600080600080608085870312156200084657600080fd5b6000620008568782880162000633565b945050602085013567ffffffffffffffff8111156200087457600080fd5b620008828782880162000697565b93505060406200089587828801620006db565b9250506060620008a887828801620006c4565b91505092959194509250565b620008bf8162000cc6565b82525050565b620008da620008d48262000cda565b62000ddf565b82525050565b6000620008ed8262000c83565b620008f9818562000c99565b93506200090b81856020860162000d81565b620009168162000e36565b840191505092915050565b60006200092e8262000c83565b6200093a818562000caa565b93506200094c81856020860162000d81565b80840191505092915050565b620009638162000d22565b82525050565b6200097e620009788262000d22565b62000dcb565b82525050565b62000999620009938262000d4a565b62000db7565b82525050565b6000620009ac8262000c8e565b620009b8818562000cb5565b9350620009ca81856020860162000d81565b620009d58162000e36565b840191505092915050565b6000620009ef60138362000cb5565b91507f437265617465322063616c6c206661696c6564000000000000000000000000006000830152602082019050919050565b62000a2d8162000d18565b82525050565b62000a4862000a428262000d18565b62000dfd565b82525050565b600062000a5c8285620008c5565b60208201915062000a6e828462000a33565b6020820191508190509392505050565b600062000a8c828562000921565b915062000a9a828462000a33565b6020820191508190509392505050565b600062000ab8828462000969565b60148201915081905092915050565b600062000ad5828562000a33565b60208201915062000ae7828462000984565b6014820191508190509392505050565b600060208201905062000b0e6000830184620008b4565b92915050565b6000602082019050818103600083015262000b308184620008e0565b905092915050565b600060208201905062000b4f600083018462000958565b92915050565b600060408201905062000b6c600083018562000958565b62000b7b6020830184620008b4565b9392505050565b600060808201905062000b99600083018762000958565b62000ba86020830186620008b4565b818103604083015262000bbc8185620008e0565b905062000bcd606083018462000a22565b95945050505050565b6000602082019050818103600083015262000bf281846200099f565b905092915050565b6000602082019050818103600083015262000c1581620009e0565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171562000c465762000c4562000e07565b5b8060405250919050565b600067ffffffffffffffff82111562000c6e5762000c6d62000e07565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600062000cd38262000cf8565b9050919050565b6000819050919050565b600062000cf18262000cc6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000d2f8262000d36565b9050919050565b600062000d438262000cf8565b9050919050565b600062000d578262000d5e565b9050919050565b600062000d6b8262000cf8565b9050919050565b82818337600083830152505050565b60005b8381101562000da157808201518184015260208101905062000d84565b8381111562000db1576000848401525b50505050565b600062000dc48262000de9565b9050919050565b600062000dd88262000de9565b9050919050565b6000819050919050565b600062000df68262000e47565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b62000e5f8162000cc6565b811462000e6b57600080fd5b50565b62000e798162000ce4565b811462000e8557600080fd5b50565b62000e938162000d18565b811462000e9f57600080fd5b5056fe608060405234801561001057600080fd5b506040516102bf3803806102bf833981810160405281019061003291906100fd565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156100a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100999061018c565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610206565b6000815190506100f7816101ef565b92915050565b60006020828403121561010f57600080fd5b600061011d848285016100e8565b91505092915050565b60006101336022836101ac565b91507f496e76616c69642073696e676c65746f6e20616464726573732070726f76696460008301527f65640000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600060208201905081810360008301526101a581610126565b9050919050565b600082825260208201905092915050565b60006101c8826101cf565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101f8816101bd565b811461020357600080fd5b50565b60ab806102146000396000f3fe608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e60008114156070573d6000fd5b3d6000f3fea2646970667358221220fb241be2510e0b51a73de8d1dcc27fcec3309950959000c649b333c2c326b60464736f6c63430008000033608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e60008114156070573d6000fd5b3d6000f3fea2646970667358221220fb241be2510e0b51a73de8d1dcc27fcec3309950959000c649b333c2c326b60464736f6c63430008000033a264697066735822122069e1830ea97adbf2a85be98b3dfda221052aabe1ffbcf006260e3fc47341fa0164736f6c63430008000033";

export class GnosisSafeProxyFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GnosisSafeProxyFactory> {
    return super.deploy(overrides || {}) as Promise<GnosisSafeProxyFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GnosisSafeProxyFactory {
    return super.attach(address) as GnosisSafeProxyFactory;
  }
  connect(signer: Signer): GnosisSafeProxyFactory__factory {
    return super.connect(signer) as GnosisSafeProxyFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GnosisSafeProxyFactoryInterface {
    return new utils.Interface(_abi) as GnosisSafeProxyFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisSafeProxyFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GnosisSafeProxyFactory;
  }
}
