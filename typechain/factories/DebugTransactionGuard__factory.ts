/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DebugTransactionGuard,
  DebugTransactionGuardInterface,
} from "../DebugTransactionGuard";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "GasUsage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "safeTxGas",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "usesRefund",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "TransactionDetails",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "checkAfterExecution",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "safeTxGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "gasToken",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "refundReceiver",
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
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "txNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d1c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100505760003560e01c806301ffc9a71461005357806375f0bb5214610083578063932713681461009f578063ddbdba63146100bb57610051565b5b005b61006d60048036038101906100689190610726565b6100eb565b60405161007a9190610955565b60405180910390f35b61009d60048036038101906100989190610578565b6101bd565b005b6100b960048036038101906100b491906106ea565b610373565b005b6100d560048036038101906100d09190610698565b61043b565b6040516100e29190610990565b60405180910390f35b60007fe6d7a83a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806101b657507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600080600033905060018173ffffffffffffffffffffffffffffffffffffffff1663affed0e06040518163ffffffff1660e01b815260040160206040518083038186803b15801561020d57600080fd5b505afa158015610221573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610245919061074f565b61024f9190610a39565b92508073ffffffffffffffffffffffffffffffffffffffff1663d8d11f788f8f8f8f8f8f8f8f8f8d6040518b63ffffffff1660e01b815260040161029c9a999897969594939291906108b2565b60206040518083038186803b1580156102b457600080fd5b505afa1580156102c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ec91906106c1565b915050803373ffffffffffffffffffffffffffffffffffffffff167f1b68334da83afaffd8348d6c85c5146d8e7de31a6c034d2d522be12d615c4f7b8f8f8f8f8f60008f118a604051610345979695949392919061083c565b60405180910390a3816000808381526020019081526020016000208190555050505050505050505050505050565b600080600084815260200190815260200160002054905060008114156103ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c590610970565b60405180910390fd5b60008060008581526020019081526020016000208190555080833373ffffffffffffffffffffffffffffffffffffffff167f0dcc0fb56a30b6fe6b188f45b47369bc7f3c928a9748e245a79fc3f54ddd05688560405161042e9190610955565b60405180910390a4505050565b60006020528060005260406000206000915090505481565b6000610466610461846109dc565b6109ab565b90508281526020810184848401111561047e57600080fd5b610489848285610b58565b509392505050565b6000813590506104a081610c4c565b92915050565b6000813590506104b581610c63565b92915050565b6000813590506104ca81610c7a565b92915050565b6000813590506104df81610c91565b92915050565b6000815190506104f481610c91565b92915050565b60008135905061050981610ca8565b92915050565b600082601f83011261052057600080fd5b8135610530848260208601610453565b91505092915050565b60008135905061054881610cbf565b92915050565b60008135905061055d81610ccf565b92915050565b60008151905061057281610ccf565b92915050565b60008060008060008060008060008060006101608c8e03121561059a57600080fd5b60006105a88e828f01610491565b9b505060206105b98e828f0161054e565b9a505060408c013567ffffffffffffffff8111156105d657600080fd5b6105e28e828f0161050f565b99505060606105f38e828f01610539565b98505060806106048e828f0161054e565b97505060a06106158e828f0161054e565b96505060c06106268e828f0161054e565b95505060e06106378e828f01610491565b9450506101006106498e828f016104a6565b9350506101208c013567ffffffffffffffff81111561066757600080fd5b6106738e828f0161050f565b9250506101406106858e828f01610491565b9150509295989b509295989b9093969950565b6000602082840312156106aa57600080fd5b60006106b8848285016104d0565b91505092915050565b6000602082840312156106d357600080fd5b60006106e1848285016104e5565b91505092915050565b600080604083850312156106fd57600080fd5b600061070b858286016104d0565b925050602061071c858286016104bb565b9150509250929050565b60006020828403121561073857600080fd5b6000610746848285016104fa565b91505092915050565b60006020828403121561076157600080fd5b600061076f84828501610563565b91505092915050565b61078181610b10565b82525050565b61079081610a6d565b82525050565b61079f81610a91565b82525050565b60006107b082610a0c565b6107ba8185610a17565b93506107ca818560208601610b67565b6107d381610c27565b840191505092915050565b6107e781610b22565b82525050565b60006107fa601383610a28565b91507f436f756c64206e6f7420676574206e6f6e6365000000000000000000000000006000830152602082019050919050565b61083681610b06565b82525050565b600060e082019050610851600083018a610787565b61085e602083018961082d565b818103604083015261087081886107a5565b905061087f60608301876107de565b61088c608083018661082d565b61089960a0830185610796565b6108a660c083018461082d565b98975050505050505050565b6000610140820190506108c8600083018d610787565b6108d5602083018c61082d565b81810360408301526108e7818b6107a5565b90506108f6606083018a6107de565b610903608083018961082d565b61091060a083018861082d565b61091d60c083018761082d565b61092a60e0830186610787565b610938610100830185610778565b61094661012083018461082d565b9b9a5050505050505050505050565b600060208201905061096a6000830184610796565b92915050565b60006020820190508181036000830152610989816107ed565b9050919050565b60006020820190506109a5600083018461082d565b92915050565b6000604051905081810181811067ffffffffffffffff821117156109d2576109d1610bf8565b5b8060405250919050565b600067ffffffffffffffff8211156109f7576109f6610bf8565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610a4482610b06565b9150610a4f83610b06565b925082821015610a6257610a61610b9a565b5b828203905092915050565b6000610a7882610ae6565b9050919050565b6000610a8a82610ae6565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050610ae182610c38565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610b1b82610b34565b9050919050565b6000610b2d82610ad3565b9050919050565b6000610b3f82610b46565b9050919050565b6000610b5182610ae6565b9050919050565b82818337600083830152505050565b60005b83811015610b85578082015181840152602081019050610b6a565b83811115610b94576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60028110610c4957610c48610bc9565b5b50565b610c5581610a6d565b8114610c6057600080fd5b50565b610c6c81610a7f565b8114610c7757600080fd5b50565b610c8381610a91565b8114610c8e57600080fd5b50565b610c9a81610a9d565b8114610ca557600080fd5b50565b610cb181610aa7565b8114610cbc57600080fd5b50565b60028110610ccc57600080fd5b50565b610cd881610b06565b8114610ce357600080fd5b5056fea2646970667358221220cf64e135685bea9f4a8156ad979ff61829156362c6e7db67aaf425f635df2c1e64736f6c63430008000033";

export class DebugTransactionGuard__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DebugTransactionGuard> {
    return super.deploy(overrides || {}) as Promise<DebugTransactionGuard>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DebugTransactionGuard {
    return super.attach(address) as DebugTransactionGuard;
  }
  connect(signer: Signer): DebugTransactionGuard__factory {
    return super.connect(signer) as DebugTransactionGuard__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DebugTransactionGuardInterface {
    return new utils.Interface(_abi) as DebugTransactionGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DebugTransactionGuard {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DebugTransactionGuard;
  }
}
