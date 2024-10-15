export class SessionUser {
    private _id?: number;
    private _username?: string;
    private _email?: string;
    private _name?: string;
    private _token?: string;

    constructor(id?: number, username?: string, email?: string, name?: string, token?: string) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._name = name;
        this._token = token;
    }

    get id(): number {
        return this._id || 0;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): string {
        return this._username || '';
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email || '';
    }

    set email(value: string) {
        this._email = value;
    }

    get name(): string {
        return this._name || '';
    }

    set name(value: string) {
        this._name = value;
    }

    get token(): string {
        return this._token || '';
    }

    set token(value: string) {
        this._token = value;
    }
}

export interface IErrorMessages {
    error: string, 
    message: string
}

export interface IValidationByField {
    [key: string]: IErrorMessages[];
}

export interface ICodeValue {
    code: string;
    value: string;
}