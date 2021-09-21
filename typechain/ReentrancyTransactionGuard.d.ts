/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ReentrancyTransactionGuardInterface extends ethers.utils.Interface {
  functions: {
    "checkAfterExecution(bytes32,bool)": FunctionFragment;
    "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkAfterExecution",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTransaction",
    values: [
      string,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BytesLike,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkAfterExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export class ReentrancyTransactionGuard extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ReentrancyTransactionGuardInterface;

  functions: {
    checkAfterExecution(
      arg0: BytesLike,
      arg1: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkTransaction(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: string,
      arg8: string,
      arg9: BytesLike,
      arg10: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  checkAfterExecution(
    arg0: BytesLike,
    arg1: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkTransaction(
    arg0: string,
    arg1: BigNumberish,
    arg2: BytesLike,
    arg3: BigNumberish,
    arg4: BigNumberish,
    arg5: BigNumberish,
    arg6: BigNumberish,
    arg7: string,
    arg8: string,
    arg9: BytesLike,
    arg10: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    checkAfterExecution(
      arg0: BytesLike,
      arg1: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTransaction(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: string,
      arg8: string,
      arg9: BytesLike,
      arg10: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    checkAfterExecution(
      arg0: BytesLike,
      arg1: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkTransaction(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: string,
      arg8: string,
      arg9: BytesLike,
      arg10: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkAfterExecution(
      arg0: BytesLike,
      arg1: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkTransaction(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: string,
      arg8: string,
      arg9: BytesLike,
      arg10: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
