## API Report File for "@lumino/commands"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { IDisposable } from '@lumino/disposable';
import { ISignal } from '@lumino/signaling';
import { ReadonlyJSONObject } from '@lumino/coreutils';

// @public
export class CommandRegistry {
    constructor();
    addCommand(id: string, options: CommandRegistry.ICommandOptions): IDisposable;
    addKeyBinding(options: CommandRegistry.IKeyBindingOptions): IDisposable;
    caption(id: string, args?: ReadonlyJSONObject): string;
    className(id: string, args?: ReadonlyJSONObject): string;
    readonly commandChanged: ISignal<this, CommandRegistry.ICommandChangedArgs>;
    readonly commandExecuted: ISignal<this, CommandRegistry.ICommandExecutedArgs>;
    dataset(id: string, args?: ReadonlyJSONObject): CommandRegistry.Dataset;
    execute(id: string, args?: ReadonlyJSONObject): Promise<any>;
    hasCommand(id: string): boolean;
    // @deprecated (undocumented)
    icon(id: string, args?: ReadonlyJSONObject): string;
    iconClass(id: string, args?: ReadonlyJSONObject): string;
    iconLabel(id: string, args?: ReadonlyJSONObject): string;
    isEnabled(id: string, args?: ReadonlyJSONObject): boolean;
    isToggled(id: string, args?: ReadonlyJSONObject): boolean;
    isVisible(id: string, args?: ReadonlyJSONObject): boolean;
    readonly keyBindingChanged: ISignal<this, CommandRegistry.IKeyBindingChangedArgs>;
    readonly keyBindings: ReadonlyArray<CommandRegistry.IKeyBinding>;
    label(id: string, args?: ReadonlyJSONObject): string;
    listCommands(): string[];
    mnemonic(id: string, args?: ReadonlyJSONObject): number;
    notifyCommandChanged(id?: string): void;
    processKeydownEvent(event: KeyboardEvent): void;
    usage(id: string, args?: ReadonlyJSONObject): string;
}

// @public
export namespace CommandRegistry {
    export type CommandFunc<T> = (args: ReadonlyJSONObject) => T;
    export type Dataset = {
        readonly [key: string]: string;
    };
    export function formatKeystroke(keystroke: string): string;
    export interface ICommandChangedArgs {
        readonly id: string | undefined;
        readonly type: 'added' | 'removed' | 'changed' | 'many-changed';
    }
    export interface ICommandExecutedArgs {
        readonly args: ReadonlyJSONObject;
        readonly id: string;
        readonly result: Promise<any>;
    }
    export interface ICommandOptions {
        caption?: string | CommandFunc<string>;
        className?: string | CommandFunc<string>;
        dataset?: Dataset | CommandFunc<Dataset>;
        execute: CommandFunc<any | Promise<any>>;
        // @deprecated (undocumented)
        icon?: string | CommandFunc<string>;
        iconClass?: string | CommandFunc<string>;
        iconLabel?: string | CommandFunc<string>;
        isEnabled?: CommandFunc<boolean>;
        isToggled?: CommandFunc<boolean>;
        isVisible?: CommandFunc<boolean>;
        label?: string | CommandFunc<string>;
        mnemonic?: number | CommandFunc<number>;
        usage?: string | CommandFunc<string>;
    }
    export interface IKeyBinding {
        readonly args: ReadonlyJSONObject;
        readonly command: string;
        readonly keys: ReadonlyArray<string>;
        readonly selector: string;
    }
    export interface IKeyBindingChangedArgs {
        readonly binding: IKeyBinding;
        readonly type: 'added' | 'removed';
    }
    export interface IKeyBindingOptions {
        args?: ReadonlyJSONObject;
        command: string;
        keys: string[];
        linuxKeys?: string[];
        macKeys?: string[];
        selector: string;
        winKeys?: string[];
    }
    export interface IKeystrokeParts {
        alt: boolean;
        cmd: boolean;
        ctrl: boolean;
        key: string;
        shift: boolean;
    }
    export function keystrokeForKeydownEvent(event: KeyboardEvent): string;
    export function normalizeKeys(options: IKeyBindingOptions): string[];
    export function normalizeKeystroke(keystroke: string): string;
    export function parseKeystroke(keystroke: string): IKeystrokeParts;
}


// (No @packageDocumentation comment for this package)

```