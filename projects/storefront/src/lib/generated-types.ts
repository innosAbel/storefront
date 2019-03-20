// tslint:disable
// Generated in 2019-03-19T16:56:18+01:00
export type Maybe<T> = T | null;

export interface OrderListOptions {
    filter?: Maybe<OrderFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<OrderSortParameter>;

    take?: Maybe<number>;
}

export interface OrderFilterParameter {
    active?: Maybe<BooleanOperators>;

    code?: Maybe<StringOperators>;

    createdAt?: Maybe<DateOperators>;

    currencyCode?: Maybe<StringOperators>;

    shipping?: Maybe<NumberOperators>;

    state?: Maybe<StringOperators>;

    subTotal?: Maybe<NumberOperators>;

    subTotalBeforeTax?: Maybe<NumberOperators>;

    total?: Maybe<NumberOperators>;

    totalBeforeTax?: Maybe<NumberOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface BooleanOperators {
    eq?: Maybe<boolean>;
}

export interface StringOperators {
    contains?: Maybe<string>;

    eq?: Maybe<string>;
}

export interface DateOperators {
    after?: Maybe<DateTime>;

    before?: Maybe<DateTime>;

    between?: Maybe<DateRange>;

    eq?: Maybe<DateTime>;
}

export interface DateRange {
    end: DateTime;

    start: DateTime;
}

export interface NumberOperators {
    between?: Maybe<NumberRange>;

    eq?: Maybe<number>;

    gt?: Maybe<number>;

    gte?: Maybe<number>;

    lt?: Maybe<number>;

    lte?: Maybe<number>;
}

export interface NumberRange {
    end: number;

    start: number;
}

export interface OrderSortParameter {
    code?: Maybe<SortOrder>;

    createdAt?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    shipping?: Maybe<SortOrder>;

    state?: Maybe<SortOrder>;

    subTotal?: Maybe<SortOrder>;

    subTotalBeforeTax?: Maybe<SortOrder>;

    total?: Maybe<SortOrder>;

    totalBeforeTax?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface ProductVariantListOptions {
    filter?: Maybe<ProductVariantFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<ProductVariantSortParameter>;

    take?: Maybe<number>;
}

export interface ProductVariantFilterParameter {
    createdAt?: Maybe<DateOperators>;

    currencyCode?: Maybe<StringOperators>;

    languageCode?: Maybe<StringOperators>;

    name?: Maybe<StringOperators>;

    price?: Maybe<NumberOperators>;

    priceIncludesTax?: Maybe<BooleanOperators>;

    priceWithTax?: Maybe<NumberOperators>;

    sku?: Maybe<StringOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface ProductVariantSortParameter {
    createdAt?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    name?: Maybe<SortOrder>;

    price?: Maybe<SortOrder>;

    priceWithTax?: Maybe<SortOrder>;

    productId?: Maybe<SortOrder>;

    sku?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface CollectionListOptions {
    filter?: Maybe<CollectionFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<CollectionSortParameter>;

    take?: Maybe<number>;
}

export interface CollectionFilterParameter {
    createdAt?: Maybe<DateOperators>;

    description?: Maybe<StringOperators>;

    languageCode?: Maybe<StringOperators>;

    name?: Maybe<StringOperators>;

    position?: Maybe<NumberOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface CollectionSortParameter {
    createdAt?: Maybe<SortOrder>;

    description?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    name?: Maybe<SortOrder>;

    position?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface ProductListOptions {
    filter?: Maybe<ProductFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<ProductSortParameter>;

    take?: Maybe<number>;
}

export interface ProductFilterParameter {
    createdAt?: Maybe<DateOperators>;

    description?: Maybe<StringOperators>;

    languageCode?: Maybe<StringOperators>;

    name?: Maybe<StringOperators>;

    slug?: Maybe<StringOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface ProductSortParameter {
    createdAt?: Maybe<SortOrder>;

    description?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    name?: Maybe<SortOrder>;

    slug?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface SearchInput {
    collectionId?: Maybe<string>;

    facetIds?: Maybe<string[]>;

    groupByProduct?: Maybe<boolean>;

    skip?: Maybe<number>;

    sort?: Maybe<SearchResultSortParameter>;

    take?: Maybe<number>;

    term?: Maybe<string>;
}

export interface SearchResultSortParameter {
    name?: Maybe<SortOrder>;

    price?: Maybe<SortOrder>;
}

export interface PaymentInput {
    metadata: Json;

    method: string;
}

export interface CreateAddressInput {
    city?: Maybe<string>;

    company?: Maybe<string>;

    countryCode: string;

    customFields?: Maybe<Json>;

    defaultBillingAddress?: Maybe<boolean>;

    defaultShippingAddress?: Maybe<boolean>;

    fullName?: Maybe<string>;

    phoneNumber?: Maybe<string>;

    postalCode?: Maybe<string>;

    province?: Maybe<string>;

    streetLine1: string;

    streetLine2?: Maybe<string>;
}

export interface RegisterCustomerInput {
    emailAddress: string;

    firstName?: Maybe<string>;

    lastName?: Maybe<string>;

    password?: Maybe<string>;

    title?: Maybe<string>;
}

export interface CreateCustomerInput {
    customFields?: Maybe<Json>;

    emailAddress: string;

    firstName: string;

    lastName: string;

    phoneNumber?: Maybe<string>;

    title?: Maybe<string>;
}

export interface UpdateCustomerInput {
    customFields?: Maybe<Json>;

    emailAddress?: Maybe<string>;

    firstName?: Maybe<string>;

    lastName?: Maybe<string>;

    phoneNumber?: Maybe<string>;

    title?: Maybe<string>;
}

export interface UpdateAddressInput {
    city?: Maybe<string>;

    company?: Maybe<string>;

    countryCode?: Maybe<string>;

    customFields?: Maybe<Json>;

    defaultBillingAddress?: Maybe<boolean>;

    defaultShippingAddress?: Maybe<boolean>;

    fullName?: Maybe<string>;

    id: string;

    phoneNumber?: Maybe<string>;

    postalCode?: Maybe<string>;

    province?: Maybe<string>;

    streetLine1?: Maybe<string>;

    streetLine2?: Maybe<string>;
}

export interface ConfigArgInput {
    name: string;

    type: ConfigArgType;

    value?: Maybe<string>;
}

export interface ConfigurableOperationInput {
    arguments: ConfigArgInput[];

    code: string;
}
/** ISO 639-1 language code */
export enum LanguageCode {
    aa = "aa",
    ab = "ab",
    ae = "ae",
    af = "af",
    ak = "ak",
    am = "am",
    an = "an",
    ar = "ar",
    as = "as",
    av = "av",
    ay = "ay",
    az = "az",
    ba = "ba",
    be = "be",
    bg = "bg",
    bh = "bh",
    bi = "bi",
    bm = "bm",
    bn = "bn",
    bo = "bo",
    br = "br",
    bs = "bs",
    ca = "ca",
    ce = "ce",
    ch = "ch",
    co = "co",
    cr = "cr",
    cs = "cs",
    cu = "cu",
    cv = "cv",
    cy = "cy",
    da = "da",
    de = "de",
    dv = "dv",
    dz = "dz",
    ee = "ee",
    el = "el",
    en = "en",
    eo = "eo",
    es = "es",
    et = "et",
    eu = "eu",
    fa = "fa",
    ff = "ff",
    fi = "fi",
    fj = "fj",
    fo = "fo",
    fr = "fr",
    fy = "fy",
    ga = "ga",
    gd = "gd",
    gl = "gl",
    gn = "gn",
    gu = "gu",
    gv = "gv",
    ha = "ha",
    he = "he",
    hi = "hi",
    ho = "ho",
    hr = "hr",
    ht = "ht",
    hu = "hu",
    hy = "hy",
    hz = "hz",
    ia = "ia",
    id = "id",
    ie = "ie",
    ig = "ig",
    ii = "ii",
    ik = "ik",
    io = "io",
    is = "is",
    it = "it",
    iu = "iu",
    ja = "ja",
    jv = "jv",
    ka = "ka",
    kg = "kg",
    ki = "ki",
    kj = "kj",
    kk = "kk",
    kl = "kl",
    km = "km",
    kn = "kn",
    ko = "ko",
    kr = "kr",
    ks = "ks",
    ku = "ku",
    kv = "kv",
    kw = "kw",
    ky = "ky",
    la = "la",
    lb = "lb",
    lg = "lg",
    li = "li",
    ln = "ln",
    lo = "lo",
    lt = "lt",
    lu = "lu",
    lv = "lv",
    mg = "mg",
    mh = "mh",
    mi = "mi",
    mk = "mk",
    ml = "ml",
    mn = "mn",
    mr = "mr",
    ms = "ms",
    mt = "mt",
    my = "my",
    na = "na",
    nb = "nb",
    nd = "nd",
    ne = "ne",
    ng = "ng",
    nl = "nl",
    nn = "nn",
    no = "no",
    nr = "nr",
    nv = "nv",
    ny = "ny",
    oc = "oc",
    oj = "oj",
    om = "om",
    or = "or",
    os = "os",
    pa = "pa",
    pi = "pi",
    pl = "pl",
    ps = "ps",
    pt = "pt",
    qu = "qu",
    rm = "rm",
    rn = "rn",
    ro = "ro",
    ru = "ru",
    rw = "rw",
    sa = "sa",
    sc = "sc",
    sd = "sd",
    se = "se",
    sg = "sg",
    si = "si",
    sk = "sk",
    sl = "sl",
    sm = "sm",
    sn = "sn",
    so = "so",
    sq = "sq",
    sr = "sr",
    ss = "ss",
    st = "st",
    su = "su",
    sv = "sv",
    sw = "sw",
    ta = "ta",
    te = "te",
    tg = "tg",
    th = "th",
    ti = "ti",
    tk = "tk",
    tl = "tl",
    tn = "tn",
    to = "to",
    tr = "tr",
    ts = "ts",
    tt = "tt",
    tw = "tw",
    ty = "ty",
    ug = "ug",
    uk = "uk",
    ur = "ur",
    uz = "uz",
    ve = "ve",
    vi = "vi",
    vo = "vo",
    wa = "wa",
    wo = "wo",
    xh = "xh",
    yi = "yi",
    yo = "yo",
    za = "za",
    zh = "zh",
    zu = "zu"
}

export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
}

export enum AdjustmentType {
    PROMOTION = "PROMOTION",
    PROMOTION_REFUND = "PROMOTION_REFUND",
    REFUND = "REFUND",
    SHIPPING = "SHIPPING",
    SHIPPING_REFUND = "SHIPPING_REFUND",
    TAX = "TAX",
    TAX_REFUND = "TAX_REFUND"
}
/** ISO 4217 currency code */
export enum CurrencyCode {
    AED = "AED",
    AFN = "AFN",
    ALL = "ALL",
    AMD = "AMD",
    ANG = "ANG",
    AOA = "AOA",
    ARS = "ARS",
    AUD = "AUD",
    AWG = "AWG",
    AZN = "AZN",
    BAM = "BAM",
    BBD = "BBD",
    BDT = "BDT",
    BGN = "BGN",
    BHD = "BHD",
    BIF = "BIF",
    BMD = "BMD",
    BND = "BND",
    BOB = "BOB",
    BRL = "BRL",
    BSD = "BSD",
    BTN = "BTN",
    BWP = "BWP",
    BYN = "BYN",
    BZD = "BZD",
    CAD = "CAD",
    CHE = "CHE",
    CHW = "CHW",
    CLP = "CLP",
    CNY = "CNY",
    COP = "COP",
    CRC = "CRC",
    CUC = "CUC",
    CUP = "CUP",
    CVE = "CVE",
    CZK = "CZK",
    DJF = "DJF",
    DKK = "DKK",
    DOP = "DOP",
    DZD = "DZD",
    EGP = "EGP",
    ERN = "ERN",
    ETB = "ETB",
    EUR = "EUR",
    FJD = "FJD",
    FKP = "FKP",
    GBP = "GBP",
    GEL = "GEL",
    GHS = "GHS",
    GIP = "GIP",
    GMD = "GMD",
    GNF = "GNF",
    GTQ = "GTQ",
    GYD = "GYD",
    HKD = "HKD",
    HNL = "HNL",
    HRK = "HRK",
    HTG = "HTG",
    HUF = "HUF",
    IDR = "IDR",
    ILS = "ILS",
    INR = "INR",
    IQD = "IQD",
    IRR = "IRR",
    ISK = "ISK",
    JMD = "JMD",
    JOD = "JOD",
    JPY = "JPY",
    KES = "KES",
    KGS = "KGS",
    KHR = "KHR",
    KMF = "KMF",
    KPW = "KPW",
    KRW = "KRW",
    KWD = "KWD",
    KYD = "KYD",
    KZT = "KZT",
    LAK = "LAK",
    LBP = "LBP",
    LKR = "LKR",
    LRD = "LRD",
    LSL = "LSL",
    LYD = "LYD",
    MAD = "MAD",
    MDL = "MDL",
    MGA = "MGA",
    MKD = "MKD",
    MMK = "MMK",
    MNT = "MNT",
    MOP = "MOP",
    MRU = "MRU",
    MUR = "MUR",
    MVR = "MVR",
    MWK = "MWK",
    MXN = "MXN",
    MYR = "MYR",
    MZN = "MZN",
    NAD = "NAD",
    NGN = "NGN",
    NIO = "NIO",
    NOK = "NOK",
    NPR = "NPR",
    NZD = "NZD",
    OMR = "OMR",
    PAB = "PAB",
    PEN = "PEN",
    PGK = "PGK",
    PHP = "PHP",
    PKR = "PKR",
    PLN = "PLN",
    PYG = "PYG",
    QAR = "QAR",
    RON = "RON",
    RSD = "RSD",
    RUB = "RUB",
    RWF = "RWF",
    SAR = "SAR",
    SBD = "SBD",
    SCR = "SCR",
    SDG = "SDG",
    SEK = "SEK",
    SGD = "SGD",
    SHP = "SHP",
    SLL = "SLL",
    SOS = "SOS",
    SRD = "SRD",
    SSP = "SSP",
    STN = "STN",
    SVC = "SVC",
    SYP = "SYP",
    SZL = "SZL",
    THB = "THB",
    TJS = "TJS",
    TMT = "TMT",
    TND = "TND",
    TOP = "TOP",
    TRY = "TRY",
    TTD = "TTD",
    TWD = "TWD",
    TZS = "TZS",
    UAH = "UAH",
    UGX = "UGX",
    USD = "USD",
    UYU = "UYU",
    UZS = "UZS",
    VES = "VES",
    VND = "VND",
    VUV = "VUV",
    WST = "WST",
    XAF = "XAF",
    XCD = "XCD",
    XOF = "XOF",
    XPF = "XPF",
    YER = "YER",
    ZAR = "ZAR",
    ZMW = "ZMW",
    ZWL = "ZWL"
}

export enum AssetType {
    BINARY = "BINARY",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}
/** Certain entities allow arbitrary configuration arguments to be specified which can then be set in the admin-ui and used in the business logic of the app. These are the valid data types of such arguments. The data type influences: 1. How the argument form field is rendered in the admin-ui 2. The JavaScript type into which the value is coerced before being passed to the business logic. */
export enum ConfigArgType {
    BOOLEAN = "BOOLEAN",
    DATETIME = "DATETIME",
    FACET_VALUE_IDS = "FACET_VALUE_IDS",
    INT = "INT",
    MONEY = "MONEY",
    PERCENTAGE = "PERCENTAGE",
    STRING = "STRING"
}
/** Permissions for administrators and customers */
export enum Permission {
    Authenticated = "Authenticated",
    CreateAdministrator = "CreateAdministrator",
    CreateCatalog = "CreateCatalog",
    CreateCustomer = "CreateCustomer",
    CreateOrder = "CreateOrder",
    CreateSettings = "CreateSettings",
    DeleteAdministrator = "DeleteAdministrator",
    DeleteCatalog = "DeleteCatalog",
    DeleteCustomer = "DeleteCustomer",
    DeleteOrder = "DeleteOrder",
    DeleteSettings = "DeleteSettings",
    Owner = "Owner",
    Public = "Public",
    ReadAdministrator = "ReadAdministrator",
    ReadCatalog = "ReadCatalog",
    ReadCustomer = "ReadCustomer",
    ReadOrder = "ReadOrder",
    ReadSettings = "ReadSettings",
    SuperAdmin = "SuperAdmin",
    UpdateAdministrator = "UpdateAdministrator",
    UpdateCatalog = "UpdateCatalog",
    UpdateCustomer = "UpdateCustomer",
    UpdateOrder = "UpdateOrder",
    UpdateSettings = "UpdateSettings"
}

export enum DeletionResult {
    DELETED = "DELETED",
    NOT_DELETED = "NOT_DELETED"
}

/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export namespace GetAccountOverview {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeCustomer: Maybe<ActiveCustomer>;
    };

    export type ActiveCustomer = {
        __typename?: "Customer";

        id: string;

        title: Maybe<string>;

        firstName: string;

        lastName: string;

        emailAddress: string;
    };
}

export namespace SignOut {
    export type Variables = {};

    export type Mutation = {
        __typename?: "Mutation";

        logout: boolean;
    };
}

export namespace GetActiveCustomer {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeCustomer: Maybe<ActiveCustomer>;
    };

    export type ActiveCustomer = {
        __typename?: "Customer";

        id: string;

        firstName: string;

        lastName: string;

        emailAddress: string;
    };
}

export namespace GetActiveOrder {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeOrder: Maybe<ActiveOrder>;
    };

    export type ActiveOrder = Cart.Fragment;
}

export namespace AdjustItemQuantity {
    export type Variables = {
        id: string;
        qty: number;
    };

    export type Mutation = {
        __typename?: "Mutation";

        adjustItemQuantity: Maybe<AdjustItemQuantity>;
    };

    export type AdjustItemQuantity = Cart.Fragment;
}

export namespace RemoveItemFromCart {
    export type Variables = {
        id: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        removeItemFromOrder: Maybe<RemoveItemFromOrder>;
    };

    export type RemoveItemFromOrder = Cart.Fragment;
}

export namespace GetCartTotals {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeOrder: Maybe<ActiveOrder>;
    };

    export type ActiveOrder = {
        __typename?: "Order";

        id: string;

        active: boolean;

        lines: Lines[];

        total: number;
    };

    export type Lines = {
        __typename?: "OrderLine";

        id: string;

        quantity: number;
    };
}

export namespace GetOrderByCode {
    export type Variables = {
        code: string;
    };

    export type Query = {
        __typename?: "Query";

        orderByCode: Maybe<OrderByCode>;
    };

    export type OrderByCode = {
        __typename?: "Order";

        updatedAt: DateTime;

        customer: Maybe<Customer>;
    } & Cart.Fragment;

    export type Customer = {
        __typename?: "Customer";

        id: string;

        emailAddress: string;

        firstName: string;

        lastName: string;

        user: Maybe<User>;
    };

    export type User = {
        __typename?: "User";

        id: string;

        identifier: string;

        verified: boolean;
    };
}

export namespace AddPayment {
    export type Variables = {
        input: PaymentInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        addPaymentToOrder: Maybe<AddPaymentToOrder>;
    };

    export type AddPaymentToOrder = Cart.Fragment;
}

export namespace GetNextOrderStates {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        nextOrderStates: string[];
    };
}

export namespace TransitionToAddingItems {
    export type Variables = {};

    export type Mutation = {
        __typename?: "Mutation";

        transitionOrderToState: Maybe<TransitionOrderToState>;
    };

    export type TransitionOrderToState = Cart.Fragment;
}

export namespace GetAvailableCountries {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        availableCountries: AvailableCountries[];
    };

    export type AvailableCountries = Country.Fragment;
}

export namespace GetShippingAddress {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeOrder: Maybe<ActiveOrder>;
    };

    export type ActiveOrder = {
        __typename?: "Order";

        id: string;

        shippingAddress: Maybe<ShippingAddress>;
    };

    export type ShippingAddress = ShippingAddress.Fragment;
}

export namespace GetCustomerAddresses {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeCustomer: Maybe<ActiveCustomer>;
    };

    export type ActiveCustomer = {
        __typename?: "Customer";

        id: string;

        addresses: Maybe<Addresses[]>;
    };

    export type Addresses = Address.Fragment;
}

export namespace SetShippingAddress {
    export type Variables = {
        input: CreateAddressInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        setOrderShippingAddress: Maybe<SetOrderShippingAddress>;
    };

    export type SetOrderShippingAddress = {
        __typename?: "Order";

        shippingAddress: Maybe<ShippingAddress>;
    } & Cart.Fragment;

    export type ShippingAddress = ShippingAddress.Fragment;
}

export namespace GetEligibleShippingMethods {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        eligibleShippingMethods: EligibleShippingMethods[];
    };

    export type EligibleShippingMethods = {
        __typename?: "ShippingMethodQuote";

        id: string;

        description: string;

        price: number;
    };
}

export namespace SetShippingMethod {
    export type Variables = {
        id: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        setOrderShippingMethod: Maybe<SetOrderShippingMethod>;
    };

    export type SetOrderShippingMethod = Cart.Fragment;
}

export namespace SetCustomerForOrder {
    export type Variables = {
        input: CreateCustomerInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        setCustomerForOrder: Maybe<SetCustomerForOrder>;
    };

    export type SetCustomerForOrder = {
        __typename?: "Order";

        id: string;

        customer: Maybe<Customer>;
    };

    export type Customer = {
        __typename?: "Customer";

        id: string;

        emailAddress: string;

        firstName: string;

        lastName: string;
    };
}

export namespace TransitionToArrangingPayment {
    export type Variables = {};

    export type Mutation = {
        __typename?: "Mutation";

        transitionOrderToState: Maybe<TransitionOrderToState>;
    };

    export type TransitionOrderToState = Cart.Fragment;
}

export namespace GetCollections {
    export type Variables = {
        options?: Maybe<CollectionListOptions>;
    };

    export type Query = {
        __typename?: "Query";

        collections: Collections;
    };

    export type Collections = {
        __typename?: "CollectionList";

        items: Items[];
    };

    export type Items = {
        __typename?: "Collection";

        id: string;

        name: string;

        parent: Parent;

        featuredAsset: Maybe<FeaturedAsset>;
    };

    export type Parent = {
        __typename?: "Collection";

        id: string;

        name: string;
    };

    export type FeaturedAsset = {
        __typename?: "Asset";

        id: string;

        preview: string;
    };
}

export namespace GetProductDetail {
    export type Variables = {
        id: string;
    };

    export type Query = {
        __typename?: "Query";

        product: Maybe<Product>;
    };

    export type Product = {
        __typename?: "Product";

        id: string;

        name: string;

        description: string;

        variants: Variants[];

        featuredAsset: Maybe<FeaturedAsset>;

        assets: Assets[];
    };

    export type Variants = {
        __typename?: "ProductVariant";

        id: string;

        name: string;

        options: Options[];

        price: number;

        priceWithTax: number;

        sku: string;
    };

    export type Options = {
        __typename?: "ProductOption";

        code: Maybe<string>;

        name: Maybe<string>;
    };

    export type FeaturedAsset = {
        __typename?: "Asset";

        id: string;

        name: string;

        preview: string;

        type: AssetType;
    };

    export type Assets = {
        __typename?: "Asset";

        id: string;

        name: string;

        preview: string;

        type: AssetType;
    };
}

export namespace AddToCart {
    export type Variables = {
        variantId: string;
        qty: number;
    };

    export type Mutation = {
        __typename?: "Mutation";

        addItemToOrder: Maybe<AddItemToOrder>;
    };

    export type AddItemToOrder = Cart.Fragment;
}

export namespace SearchProducts {
    export type Variables = {
        input: SearchInput;
    };

    export type Query = {
        __typename?: "Query";

        search: Search;
    };

    export type Search = {
        __typename?: "SearchResponse";

        items: Items[];

        totalItems: number;
    };

    export type Items = {
        __typename?: "SearchResult";

        productId: string;

        slug: string;

        productName: string;

        description: string;

        price: number;

        productPreview: string;
    };
}

export namespace Register {
    export type Variables = {
        input: RegisterCustomerInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        registerCustomerAccount: boolean;
    };
}

export namespace SignIn {
    export type Variables = {
        emailAddress: string;
        password: string;
        rememberMe: boolean;
    };

    export type Mutation = {
        __typename?: "Mutation";

        login: Login;
    };

    export type Login = {
        __typename?: "LoginResult";

        user: User;
    };

    export type User = {
        __typename?: "CurrentUser";

        id: string;
    };
}

export namespace Verify {
    export type Variables = {
        password: string;
        token: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        verifyCustomerAccount: VerifyCustomerAccount;
    };

    export type VerifyCustomerAccount = {
        __typename?: "LoginResult";

        user: User;
    };

    export type User = {
        __typename?: "CurrentUser";

        id: string;

        identifier: string;
    };
}

export namespace GetOrderForCheckout {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeOrder: Maybe<ActiveOrder>;
    };

    export type ActiveOrder = {
        __typename?: "Order";

        shippingAddress: Maybe<ShippingAddress>;
    } & Cart.Fragment;

    export type ShippingAddress = ShippingAddress.Fragment;
}

export namespace Cart {
    export type Fragment = {
        __typename?: "Order";

        id: string;

        code: string;

        state: string;

        active: boolean;

        lines: Lines[];

        subTotal: number;

        subTotalBeforeTax: number;

        totalBeforeTax: number;

        shipping: number;

        shippingMethod: Maybe<ShippingMethod>;

        total: number;

        adjustments: _Adjustments[];
    };

    export type Lines = {
        __typename?: "OrderLine";

        id: string;

        featuredAsset: Maybe<FeaturedAsset>;

        unitPrice: number;

        unitPriceWithTax: number;

        quantity: number;

        totalPrice: number;

        productVariant: ProductVariant;

        adjustments: Adjustments[];
    };

    export type FeaturedAsset = {
        __typename?: "Asset";

        id: string;

        preview: string;

        name: string;
    };

    export type ProductVariant = {
        __typename?: "ProductVariant";

        id: string;

        name: string;
    };

    export type Adjustments = {
        __typename?: "Adjustment";

        amount: number;

        description: string;

        adjustmentSource: string;

        type: AdjustmentType;
    };

    export type ShippingMethod = {
        __typename?: "ShippingMethod";

        id: string;

        code: string;

        description: string;
    };

    export type _Adjustments = {
        __typename?: "Adjustment";

        amount: number;

        description: string;

        adjustmentSource: string;

        type: AdjustmentType;
    };
}

export namespace Country {
    export type Fragment = {
        __typename?: "Country";

        id: string;

        code: string;

        name: string;

        enabled: boolean;
    };
}

export namespace ShippingAddress {
    export type Fragment = {
        __typename?: "OrderAddress";

        fullName: Maybe<string>;

        company: Maybe<string>;

        streetLine1: Maybe<string>;

        streetLine2: Maybe<string>;

        city: Maybe<string>;

        province: Maybe<string>;

        postalCode: Maybe<string>;

        country: Maybe<string>;

        phoneNumber: Maybe<string>;
    };
}

export namespace Address {
    export type Fragment = {
        __typename?: "Address";

        id: string;

        fullName: Maybe<string>;

        company: Maybe<string>;

        streetLine1: string;

        streetLine2: Maybe<string>;

        city: Maybe<string>;

        province: Maybe<string>;

        postalCode: Maybe<string>;

        country: Country;

        phoneNumber: Maybe<string>;

        defaultShippingAddress: Maybe<boolean>;

        defaultBillingAddress: Maybe<boolean>;
    };

    export type Country = {
        __typename?: "Country";

        id: string;

        code: string;

        name: string;
    };
}
