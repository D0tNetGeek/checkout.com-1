﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.17.9.0 (NJsonSchema v9.10.46.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class ApiClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    CartByCartIdGet(cartId: string, version: string): Promise<CartDto> {
        let url_ = this.baseUrl + "/api/v{version}/Cart/{cartId}";
        if (cartId === undefined || cartId === null)
            throw new Error("The parameter 'cartId' must be defined.");
        url_ = url_.replace("{cartId}", encodeURIComponent("" + cartId)); 
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCartByCartIdGet(_response);
        });
    }

    protected processCartByCartIdGet(response: Response): Promise<CartDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? CartDto.fromJS(resultData200) : new CartDto();
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CartDto>(<any>null);
    }

    /**
     * @return Success
     */
    CartByCartIdDelete(cartId: string, version: string): Promise<void> {
        let url_ = this.baseUrl + "/api/v{version}/Cart/{cartId}";
        if (cartId === undefined || cartId === null)
            throw new Error("The parameter 'cartId' must be defined.");
        url_ = url_.replace("{cartId}", encodeURIComponent("" + cartId)); 
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCartByCartIdDelete(_response);
        });
    }

    protected processCartByCartIdDelete(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * @cartId (optional) 
     * @countryId (optional) 
     * @productId (optional) 
     * @qty (optional) 
     * @return Success
     */
    CartPut(cartId: string, countryId: number, productId: number, qty: number, version: string): Promise<CartProductDto> {
        let url_ = this.baseUrl + "/api/v{version}/Cart?";
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version)); 
        if (cartId !== undefined)
            url_ += "CartId=" + encodeURIComponent("" + cartId) + "&"; 
        if (countryId !== undefined)
            url_ += "CountryId=" + encodeURIComponent("" + countryId) + "&"; 
        if (productId !== undefined)
            url_ += "ProductId=" + encodeURIComponent("" + productId) + "&"; 
        if (qty !== undefined)
            url_ += "Qty=" + encodeURIComponent("" + qty) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "PUT",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCartPut(_response);
        });
    }

    protected processCartPut(response: Response): Promise<CartProductDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? CartProductDto.fromJS(resultData200) : new CartProductDto();
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CartProductDto>(<any>null);
    }

    /**
     * @return Success
     */
    CartByCartIdByProductIdDelete(cartId: string, productId: number, version: string): Promise<void> {
        let url_ = this.baseUrl + "/api/v{version}/Cart/{cartId}/{productId}";
        if (cartId === undefined || cartId === null)
            throw new Error("The parameter 'cartId' must be defined.");
        url_ = url_.replace("{cartId}", encodeURIComponent("" + cartId)); 
        if (productId === undefined || productId === null)
            throw new Error("The parameter 'productId' must be defined.");
        url_ = url_.replace("{productId}", encodeURIComponent("" + productId)); 
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCartByCartIdByProductIdDelete(_response);
        });
    }

    protected processCartByCartIdByProductIdDelete(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * @return Success
     */
    CountriesGet(version: string): Promise<CountryDto[]> {
        let url_ = this.baseUrl + "/api/v{version}/Countries";
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCountriesGet(_response);
        });
    }

    protected processCountriesGet(response: Response): Promise<CountryDto[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(CountryDto.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CountryDto[]>(<any>null);
    }

    /**
     * @return Success
     */
    CountriesByCountryIdGet(countryId: number, version: string): Promise<CountryDto> {
        let url_ = this.baseUrl + "/api/v{version}/Countries/{countryId}";
        if (countryId === undefined || countryId === null)
            throw new Error("The parameter 'countryId' must be defined.");
        url_ = url_.replace("{countryId}", encodeURIComponent("" + countryId)); 
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCountriesByCountryIdGet(_response);
        });
    }

    protected processCountriesByCountryIdGet(response: Response): Promise<CountryDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? CountryDto.fromJS(resultData200) : new CountryDto();
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CountryDto>(<any>null);
    }

    /**
     * @pageIndex (optional) 
     * @pageSize (optional) 
     * @return Success
     */
    ProductsByCountryIdGet(countryId: number, pageIndex: number, pageSize: number, version: string): Promise<ProductDto[]> {
        let url_ = this.baseUrl + "/api/v{version}/Products/{countryId}?";
        if (countryId === undefined || countryId === null)
            throw new Error("The parameter 'countryId' must be defined.");
        url_ = url_.replace("{countryId}", encodeURIComponent("" + countryId)); 
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version)); 
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&"; 
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processProductsByCountryIdGet(_response);
        });
    }

    protected processProductsByCountryIdGet(response: Response): Promise<ProductDto[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(ProductDto.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductDto[]>(<any>null);
    }

    /**
     * @return Success
     */
    ProductsByProductIdGet(productId: number, version: string): Promise<ProductDto> {
        let url_ = this.baseUrl + "/api/v{version}/Products/{productId}";
        if (productId === undefined || productId === null)
            throw new Error("The parameter 'productId' must be defined.");
        url_ = url_.replace("{productId}", encodeURIComponent("" + productId)); 
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processProductsByProductIdGet(_response);
        });
    }

    protected processProductsByProductIdGet(response: Response): Promise<ProductDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ProductDto.fromJS(resultData200) : new ProductDto();
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductDto>(<any>null);
    }
}

export class CartDto implements ICartDto {
    cartId?: string;
    countryId?: number;
    countryIsoCode?: string;
    items?: CartProductDto[];
    totalNetPrice?: number;
    totalNetPriceFormatted?: string;
    totalTax?: number;
    totalTaxFormatted?: string;
    totalGrossPrice?: number;
    totalGrossPriceFormatted?: string;

    constructor(data?: ICartDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.cartId = data["cartId"];
            this.countryId = data["countryId"];
            this.countryIsoCode = data["countryIsoCode"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(CartProductDto.fromJS(item));
            }
            this.totalNetPrice = data["totalNetPrice"];
            this.totalNetPriceFormatted = data["totalNetPriceFormatted"];
            this.totalTax = data["totalTax"];
            this.totalTaxFormatted = data["totalTaxFormatted"];
            this.totalGrossPrice = data["totalGrossPrice"];
            this.totalGrossPriceFormatted = data["totalGrossPriceFormatted"];
        }
    }

    static fromJS(data: any): CartDto {
        data = typeof data === 'object' ? data : {};
        let result = new CartDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["cartId"] = this.cartId;
        data["countryId"] = this.countryId;
        data["countryIsoCode"] = this.countryIsoCode;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        data["totalNetPrice"] = this.totalNetPrice;
        data["totalNetPriceFormatted"] = this.totalNetPriceFormatted;
        data["totalTax"] = this.totalTax;
        data["totalTaxFormatted"] = this.totalTaxFormatted;
        data["totalGrossPrice"] = this.totalGrossPrice;
        data["totalGrossPriceFormatted"] = this.totalGrossPriceFormatted;
        return data; 
    }
}

export interface ICartDto {
    cartId?: string;
    countryId?: number;
    countryIsoCode?: string;
    items?: CartProductDto[];
    totalNetPrice?: number;
    totalNetPriceFormatted?: string;
    totalTax?: number;
    totalTaxFormatted?: string;
    totalGrossPrice?: number;
    totalGrossPriceFormatted?: string;
}

export class CartProductDto implements ICartProductDto {
    countryIsoCode?: string;
    netPrice?: number;
    totalNetPrice?: number;
    totalNetPriceFormatted?: string;
    taxAmount?: number;
    taxAmountFormatted?: string;
    totalTax?: number;
    totalTaxFormatted?: string;
    totalGrossPrice?: number;
    totalGrossPriceFormatted?: string;
    cartId?: string;
    countryId?: number;
    productId?: number;
    qty?: number;

    constructor(data?: ICartProductDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.countryIsoCode = data["countryIsoCode"];
            this.netPrice = data["netPrice"];
            this.totalNetPrice = data["totalNetPrice"];
            this.totalNetPriceFormatted = data["totalNetPriceFormatted"];
            this.taxAmount = data["taxAmount"];
            this.taxAmountFormatted = data["taxAmountFormatted"];
            this.totalTax = data["totalTax"];
            this.totalTaxFormatted = data["totalTaxFormatted"];
            this.totalGrossPrice = data["totalGrossPrice"];
            this.totalGrossPriceFormatted = data["totalGrossPriceFormatted"];
            this.cartId = data["cartId"];
            this.countryId = data["countryId"];
            this.productId = data["productId"];
            this.qty = data["qty"];
        }
    }

    static fromJS(data: any): CartProductDto {
        data = typeof data === 'object' ? data : {};
        let result = new CartProductDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["countryIsoCode"] = this.countryIsoCode;
        data["netPrice"] = this.netPrice;
        data["totalNetPrice"] = this.totalNetPrice;
        data["totalNetPriceFormatted"] = this.totalNetPriceFormatted;
        data["taxAmount"] = this.taxAmount;
        data["taxAmountFormatted"] = this.taxAmountFormatted;
        data["totalTax"] = this.totalTax;
        data["totalTaxFormatted"] = this.totalTaxFormatted;
        data["totalGrossPrice"] = this.totalGrossPrice;
        data["totalGrossPriceFormatted"] = this.totalGrossPriceFormatted;
        data["cartId"] = this.cartId;
        data["countryId"] = this.countryId;
        data["productId"] = this.productId;
        data["qty"] = this.qty;
        return data; 
    }
}

export interface ICartProductDto {
    countryIsoCode?: string;
    netPrice?: number;
    totalNetPrice?: number;
    totalNetPriceFormatted?: string;
    taxAmount?: number;
    taxAmountFormatted?: string;
    totalTax?: number;
    totalTaxFormatted?: string;
    totalGrossPrice?: number;
    totalGrossPriceFormatted?: string;
    cartId?: string;
    countryId?: number;
    productId?: number;
    qty?: number;
}

export class CountryDto implements ICountryDto {
    name: string;
    isoCode: string;
    currencySymbol?: string;
    currency?: string;
    tax?: number;
    taxFormatted?: string;
    isDefault?: boolean;
    isActive?: boolean;
    id?: number;

    constructor(data?: ICountryDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.isoCode = data["isoCode"];
            this.currencySymbol = data["currencySymbol"];
            this.currency = data["currency"];
            this.tax = data["tax"];
            this.taxFormatted = data["taxFormatted"];
            this.isDefault = data["isDefault"];
            this.isActive = data["isActive"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): CountryDto {
        data = typeof data === 'object' ? data : {};
        let result = new CountryDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["isoCode"] = this.isoCode;
        data["currencySymbol"] = this.currencySymbol;
        data["currency"] = this.currency;
        data["tax"] = this.tax;
        data["taxFormatted"] = this.taxFormatted;
        data["isDefault"] = this.isDefault;
        data["isActive"] = this.isActive;
        data["id"] = this.id;
        return data; 
    }
}

export interface ICountryDto {
    name: string;
    isoCode: string;
    currencySymbol?: string;
    currency?: string;
    tax?: number;
    taxFormatted?: string;
    isDefault?: boolean;
    isActive?: boolean;
    id?: number;
}

export class ProductDto implements IProductDto {
    code: string;
    shortDescription: string;
    netPrice?: number;
    netPriceFormatted?: string;
    country: CountryDto;
    taxAmount?: number;
    taxAmountFormatted?: string;
    id?: number;
    name?: string;

    constructor(data?: IProductDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.country = new CountryDto();
        }
    }

    init(data?: any) {
        if (data) {
            this.code = data["code"];
            this.shortDescription = data["shortDescription"];
            this.netPrice = data["netPrice"];
            this.netPriceFormatted = data["netPriceFormatted"];
            this.country = data["country"] ? CountryDto.fromJS(data["country"]) : new CountryDto();
            this.taxAmount = data["taxAmount"];
            this.taxAmountFormatted = data["taxAmountFormatted"];
            this.id = data["id"];
            this.name = data["name"];
        }
    }

    static fromJS(data: any): ProductDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code;
        data["shortDescription"] = this.shortDescription;
        data["netPrice"] = this.netPrice;
        data["netPriceFormatted"] = this.netPriceFormatted;
        data["country"] = this.country ? this.country.toJSON() : <any>undefined;
        data["taxAmount"] = this.taxAmount;
        data["taxAmountFormatted"] = this.taxAmountFormatted;
        data["id"] = this.id;
        data["name"] = this.name;
        return data; 
    }
}

export interface IProductDto {
    code: string;
    shortDescription: string;
    netPrice?: number;
    netPriceFormatted?: string;
    country: CountryDto;
    taxAmount?: number;
    taxAmountFormatted?: string;
    id?: number;
    name?: string;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}