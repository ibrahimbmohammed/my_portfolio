/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /**
     * The `Date` scalar type represents a Date
     * value as specified by
     * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    Date: any;
    /**
     * The `DateTime` scalar type represents a DateTime
     * value as specified by
     * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    DateTime: any;
    /** The `Decimal` scalar type represents a python Decimal. */
    Decimal: any;
    /**
     *
     *     Errors messages and codes mapped to
     *     fields or non fields errors.
     *     Example:
     *     {
     *         field_name: [
     *             {
     *                 "message": "error message",
     *                 "code": "error_code"
     *             }
     *         ],
     *         other_field: [
     *             {
     *                 "message": "error message",
     *                 "code": "error_code"
     *             }
     *         ],
     *         nonFieldErrors: [
     *             {
     *                 "message": "error message",
     *                 "code": "error_code"
     *             }
     *         ]
     *     }
     *
     */
    ExpectedErrorType: any;
    /**
     * The `GenericScalar` scalar type represents a generic
     * GraphQL scalar value that could be:
     * String, Boolean, Int, Float, List or Object.
     */
    GenericScalar: any;
    /**
     * The `Time` scalar type represents a Time value as
     * specified by
     * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    Time: any;
    /**
     * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
     * in fields, resolvers and input.
     */
    UUID: any;
    /**
     * Create scalar that ignores normal serialization/deserialization, since
     * that will be handled by the multipart request spec
     */
    Upload: any;
};

/** Delete an AcademicRecord */
export type AcademicRecordDeleteMutation = {
    __typename?: 'AcademicRecordDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/**  Academic Record model type definition  */
export type AcademicRecordModelType = Node & {
    __typename?: 'AcademicRecordModelType';
    /** Academic session admitted */
    admitted?: Maybe<Scalars['Date']>;
    /** Upload size of file should be a maximum of 2mb */
    certificate?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    /** Currently enrolled in this academic program */
    current?: Maybe<Scalars['Boolean']>;
    discipline?: Maybe<DepartmentModelType>;
    /** Academic session graduated */
    graduated?: Maybe<Scalars['Date']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    pk: Scalars['ID'];
    program: Scalars['String'];
    school: SchoolModelType;
    updated: Scalars['DateTime'];
    user: UserType;
    uuid: Scalars['UUID'];
};

export type AcademicRecordModelTypeConnection = {
    __typename?: 'AcademicRecordModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AcademicRecordModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `AcademicRecordModelType` and its cursor. */
export type AcademicRecordModelTypeEdge = {
    __typename?: 'AcademicRecordModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AcademicRecordModelType>;
};

/** An enumeration. */
export enum AccountsUserCountryChoices {
    /** Andorra */
    Ad = 'AD',
    /** United Arab Emirates */
    Ae = 'AE',
    /** Afghanistan */
    Af = 'AF',
    /** Antigua and Barbuda */
    Ag = 'AG',
    /** Anguilla */
    Ai = 'AI',
    /** Albania */
    Al = 'AL',
    /** Armenia */
    Am = 'AM',
    /** Angola */
    Ao = 'AO',
    /** Antarctica */
    Aq = 'AQ',
    /** Argentina */
    Ar = 'AR',
    /** American Samoa */
    As = 'AS',
    /** Austria */
    At = 'AT',
    /** Australia */
    Au = 'AU',
    /** Aruba */
    Aw = 'AW',
    /** Åland Islands */
    Ax = 'AX',
    /** Azerbaijan */
    Az = 'AZ',
    /** Bosnia and Herzegovina */
    Ba = 'BA',
    /** Barbados */
    Bb = 'BB',
    /** Bangladesh */
    Bd = 'BD',
    /** Belgium */
    Be = 'BE',
    /** Burkina Faso */
    Bf = 'BF',
    /** Bulgaria */
    Bg = 'BG',
    /** Bahrain */
    Bh = 'BH',
    /** Burundi */
    Bi = 'BI',
    /** Benin */
    Bj = 'BJ',
    /** Saint Barthélemy */
    Bl = 'BL',
    /** Bermuda */
    Bm = 'BM',
    /** Brunei */
    Bn = 'BN',
    /** Bolivia */
    Bo = 'BO',
    /** Bonaire, Sint Eustatius and Saba */
    Bq = 'BQ',
    /** Brazil */
    Br = 'BR',
    /** Bahamas */
    Bs = 'BS',
    /** Bhutan */
    Bt = 'BT',
    /** Bouvet Island */
    Bv = 'BV',
    /** Botswana */
    Bw = 'BW',
    /** Belarus */
    By = 'BY',
    /** Belize */
    Bz = 'BZ',
    /** Canada */
    Ca = 'CA',
    /** Cocos (Keeling) Islands */
    Cc = 'CC',
    /** Congo (the Democratic Republic of the) */
    Cd = 'CD',
    /** Central African Republic */
    Cf = 'CF',
    /** Congo */
    Cg = 'CG',
    /** Switzerland */
    Ch = 'CH',
    /** Côte d'Ivoire */
    Ci = 'CI',
    /** Cook Islands */
    Ck = 'CK',
    /** Chile */
    Cl = 'CL',
    /** Cameroon */
    Cm = 'CM',
    /** China */
    Cn = 'CN',
    /** Colombia */
    Co = 'CO',
    /** Costa Rica */
    Cr = 'CR',
    /** Cuba */
    Cu = 'CU',
    /** Cabo Verde */
    Cv = 'CV',
    /** Curaçao */
    Cw = 'CW',
    /** Christmas Island */
    Cx = 'CX',
    /** Cyprus */
    Cy = 'CY',
    /** Czechia */
    Cz = 'CZ',
    /** Germany */
    De = 'DE',
    /** Djibouti */
    Dj = 'DJ',
    /** Denmark */
    Dk = 'DK',
    /** Dominica */
    Dm = 'DM',
    /** Dominican Republic */
    Do = 'DO',
    /** Algeria */
    Dz = 'DZ',
    /** Ecuador */
    Ec = 'EC',
    /** Estonia */
    Ee = 'EE',
    /** Egypt */
    Eg = 'EG',
    /** Western Sahara */
    Eh = 'EH',
    /** Eritrea */
    Er = 'ER',
    /** Spain */
    Es = 'ES',
    /** Ethiopia */
    Et = 'ET',
    /** Finland */
    Fi = 'FI',
    /** Fiji */
    Fj = 'FJ',
    /** Falkland Islands (Malvinas) */
    Fk = 'FK',
    /** Micronesia (Federated States of) */
    Fm = 'FM',
    /** Faroe Islands */
    Fo = 'FO',
    /** France */
    Fr = 'FR',
    /** Gabon */
    Ga = 'GA',
    /** United Kingdom */
    Gb = 'GB',
    /** Grenada */
    Gd = 'GD',
    /** Georgia */
    Ge = 'GE',
    /** French Guiana */
    Gf = 'GF',
    /** Guernsey */
    Gg = 'GG',
    /** Ghana */
    Gh = 'GH',
    /** Gibraltar */
    Gi = 'GI',
    /** Greenland */
    Gl = 'GL',
    /** Gambia */
    Gm = 'GM',
    /** Guinea */
    Gn = 'GN',
    /** Guadeloupe */
    Gp = 'GP',
    /** Equatorial Guinea */
    Gq = 'GQ',
    /** Greece */
    Gr = 'GR',
    /** South Georgia and the South Sandwich Islands */
    Gs = 'GS',
    /** Guatemala */
    Gt = 'GT',
    /** Guam */
    Gu = 'GU',
    /** Guinea-Bissau */
    Gw = 'GW',
    /** Guyana */
    Gy = 'GY',
    /** Hong Kong */
    Hk = 'HK',
    /** Heard Island and McDonald Islands */
    Hm = 'HM',
    /** Honduras */
    Hn = 'HN',
    /** Croatia */
    Hr = 'HR',
    /** Haiti */
    Ht = 'HT',
    /** Hungary */
    Hu = 'HU',
    /** Indonesia */
    Id = 'ID',
    /** Ireland */
    Ie = 'IE',
    /** Israel */
    Il = 'IL',
    /** Isle of Man */
    Im = 'IM',
    /** India */
    In = 'IN',
    /** British Indian Ocean Territory */
    Io = 'IO',
    /** Iraq */
    Iq = 'IQ',
    /** Iran */
    Ir = 'IR',
    /** Iceland */
    Is = 'IS',
    /** Italy */
    It = 'IT',
    /** Jersey */
    Je = 'JE',
    /** Jamaica */
    Jm = 'JM',
    /** Jordan */
    Jo = 'JO',
    /** Japan */
    Jp = 'JP',
    /** Kenya */
    Ke = 'KE',
    /** Kyrgyzstan */
    Kg = 'KG',
    /** Cambodia */
    Kh = 'KH',
    /** Kiribati */
    Ki = 'KI',
    /** Comoros */
    Km = 'KM',
    /** Saint Kitts and Nevis */
    Kn = 'KN',
    /** North Korea */
    Kp = 'KP',
    /** South Korea */
    Kr = 'KR',
    /** Kuwait */
    Kw = 'KW',
    /** Cayman Islands */
    Ky = 'KY',
    /** Kazakhstan */
    Kz = 'KZ',
    /** Laos */
    La = 'LA',
    /** Lebanon */
    Lb = 'LB',
    /** Saint Lucia */
    Lc = 'LC',
    /** Liechtenstein */
    Li = 'LI',
    /** Sri Lanka */
    Lk = 'LK',
    /** Liberia */
    Lr = 'LR',
    /** Lesotho */
    Ls = 'LS',
    /** Lithuania */
    Lt = 'LT',
    /** Luxembourg */
    Lu = 'LU',
    /** Latvia */
    Lv = 'LV',
    /** Libya */
    Ly = 'LY',
    /** Morocco */
    Ma = 'MA',
    /** Monaco */
    Mc = 'MC',
    /** Moldova */
    Md = 'MD',
    /** Montenegro */
    Me = 'ME',
    /** Saint Martin (French part) */
    Mf = 'MF',
    /** Madagascar */
    Mg = 'MG',
    /** Marshall Islands */
    Mh = 'MH',
    /** North Macedonia */
    Mk = 'MK',
    /** Mali */
    Ml = 'ML',
    /** Myanmar */
    Mm = 'MM',
    /** Mongolia */
    Mn = 'MN',
    /** Macao */
    Mo = 'MO',
    /** Northern Mariana Islands */
    Mp = 'MP',
    /** Martinique */
    Mq = 'MQ',
    /** Mauritania */
    Mr = 'MR',
    /** Montserrat */
    Ms = 'MS',
    /** Malta */
    Mt = 'MT',
    /** Mauritius */
    Mu = 'MU',
    /** Maldives */
    Mv = 'MV',
    /** Malawi */
    Mw = 'MW',
    /** Mexico */
    Mx = 'MX',
    /** Malaysia */
    My = 'MY',
    /** Mozambique */
    Mz = 'MZ',
    /** Namibia */
    Na = 'NA',
    /** New Caledonia */
    Nc = 'NC',
    /** Niger */
    Ne = 'NE',
    /** Norfolk Island */
    Nf = 'NF',
    /** Nigeria */
    Ng = 'NG',
    /** Nicaragua */
    Ni = 'NI',
    /** Netherlands */
    Nl = 'NL',
    /** Norway */
    No = 'NO',
    /** Nepal */
    Np = 'NP',
    /** Nauru */
    Nr = 'NR',
    /** Niue */
    Nu = 'NU',
    /** New Zealand */
    Nz = 'NZ',
    /** Oman */
    Om = 'OM',
    /** Panama */
    Pa = 'PA',
    /** Peru */
    Pe = 'PE',
    /** French Polynesia */
    Pf = 'PF',
    /** Papua New Guinea */
    Pg = 'PG',
    /** Philippines */
    Ph = 'PH',
    /** Pakistan */
    Pk = 'PK',
    /** Poland */
    Pl = 'PL',
    /** Saint Pierre and Miquelon */
    Pm = 'PM',
    /** Pitcairn */
    Pn = 'PN',
    /** Puerto Rico */
    Pr = 'PR',
    /** Palestine, State of */
    Ps = 'PS',
    /** Portugal */
    Pt = 'PT',
    /** Palau */
    Pw = 'PW',
    /** Paraguay */
    Py = 'PY',
    /** Qatar */
    Qa = 'QA',
    /** Réunion */
    Re = 'RE',
    /** Romania */
    Ro = 'RO',
    /** Serbia */
    Rs = 'RS',
    /** Russia */
    Ru = 'RU',
    /** Rwanda */
    Rw = 'RW',
    /** Saudi Arabia */
    Sa = 'SA',
    /** Solomon Islands */
    Sb = 'SB',
    /** Seychelles */
    Sc = 'SC',
    /** Sudan */
    Sd = 'SD',
    /** Sweden */
    Se = 'SE',
    /** Singapore */
    Sg = 'SG',
    /** Saint Helena, Ascension and Tristan da Cunha */
    Sh = 'SH',
    /** Slovenia */
    Si = 'SI',
    /** Svalbard and Jan Mayen */
    Sj = 'SJ',
    /** Slovakia */
    Sk = 'SK',
    /** Sierra Leone */
    Sl = 'SL',
    /** San Marino */
    Sm = 'SM',
    /** Senegal */
    Sn = 'SN',
    /** Somalia */
    So = 'SO',
    /** Suriname */
    Sr = 'SR',
    /** South Sudan */
    Ss = 'SS',
    /** Sao Tome and Principe */
    St = 'ST',
    /** El Salvador */
    Sv = 'SV',
    /** Sint Maarten (Dutch part) */
    Sx = 'SX',
    /** Syria */
    Sy = 'SY',
    /** Eswatini */
    Sz = 'SZ',
    /** Turks and Caicos Islands */
    Tc = 'TC',
    /** Chad */
    Td = 'TD',
    /** French Southern Territories */
    Tf = 'TF',
    /** Togo */
    Tg = 'TG',
    /** Thailand */
    Th = 'TH',
    /** Tajikistan */
    Tj = 'TJ',
    /** Tokelau */
    Tk = 'TK',
    /** Timor-Leste */
    Tl = 'TL',
    /** Turkmenistan */
    Tm = 'TM',
    /** Tunisia */
    Tn = 'TN',
    /** Tonga */
    To = 'TO',
    /** Turkey */
    Tr = 'TR',
    /** Trinidad and Tobago */
    Tt = 'TT',
    /** Tuvalu */
    Tv = 'TV',
    /** Taiwan */
    Tw = 'TW',
    /** Tanzania */
    Tz = 'TZ',
    /** Ukraine */
    Ua = 'UA',
    /** Uganda */
    Ug = 'UG',
    /** United States Minor Outlying Islands */
    Um = 'UM',
    /** United States of America */
    Us = 'US',
    /** Uruguay */
    Uy = 'UY',
    /** Uzbekistan */
    Uz = 'UZ',
    /** Holy See */
    Va = 'VA',
    /** Saint Vincent and the Grenadines */
    Vc = 'VC',
    /** Venezuela */
    Ve = 'VE',
    /** Virgin Islands (British) */
    Vg = 'VG',
    /** Virgin Islands (U.S.) */
    Vi = 'VI',
    /** Vietnam */
    Vn = 'VN',
    /** Vanuatu */
    Vu = 'VU',
    /** Wallis and Futuna */
    Wf = 'WF',
    /** Samoa */
    Ws = 'WS',
    /** Yemen */
    Ye = 'YE',
    /** Mayotte */
    Yt = 'YT',
    /** South Africa */
    Za = 'ZA',
    /** Zambia */
    Zm = 'ZM',
    /** Zimbabwe */
    Zw = 'ZW',
}

/** An enumeration. */
export enum AccountsUserGenderChoices {
    /** Female */
    Female = 'FEMALE',
    /** Male */
    Male = 'MALE',
}

/** An enumeration. */
export enum AccountsUserNationalityChoices {
    /** Andorra */
    Ad = 'AD',
    /** United Arab Emirates */
    Ae = 'AE',
    /** Afghanistan */
    Af = 'AF',
    /** Antigua and Barbuda */
    Ag = 'AG',
    /** Anguilla */
    Ai = 'AI',
    /** Albania */
    Al = 'AL',
    /** Armenia */
    Am = 'AM',
    /** Angola */
    Ao = 'AO',
    /** Antarctica */
    Aq = 'AQ',
    /** Argentina */
    Ar = 'AR',
    /** American Samoa */
    As = 'AS',
    /** Austria */
    At = 'AT',
    /** Australia */
    Au = 'AU',
    /** Aruba */
    Aw = 'AW',
    /** Åland Islands */
    Ax = 'AX',
    /** Azerbaijan */
    Az = 'AZ',
    /** Bosnia and Herzegovina */
    Ba = 'BA',
    /** Barbados */
    Bb = 'BB',
    /** Bangladesh */
    Bd = 'BD',
    /** Belgium */
    Be = 'BE',
    /** Burkina Faso */
    Bf = 'BF',
    /** Bulgaria */
    Bg = 'BG',
    /** Bahrain */
    Bh = 'BH',
    /** Burundi */
    Bi = 'BI',
    /** Benin */
    Bj = 'BJ',
    /** Saint Barthélemy */
    Bl = 'BL',
    /** Bermuda */
    Bm = 'BM',
    /** Brunei */
    Bn = 'BN',
    /** Bolivia */
    Bo = 'BO',
    /** Bonaire, Sint Eustatius and Saba */
    Bq = 'BQ',
    /** Brazil */
    Br = 'BR',
    /** Bahamas */
    Bs = 'BS',
    /** Bhutan */
    Bt = 'BT',
    /** Bouvet Island */
    Bv = 'BV',
    /** Botswana */
    Bw = 'BW',
    /** Belarus */
    By = 'BY',
    /** Belize */
    Bz = 'BZ',
    /** Canada */
    Ca = 'CA',
    /** Cocos (Keeling) Islands */
    Cc = 'CC',
    /** Congo (the Democratic Republic of the) */
    Cd = 'CD',
    /** Central African Republic */
    Cf = 'CF',
    /** Congo */
    Cg = 'CG',
    /** Switzerland */
    Ch = 'CH',
    /** Côte d'Ivoire */
    Ci = 'CI',
    /** Cook Islands */
    Ck = 'CK',
    /** Chile */
    Cl = 'CL',
    /** Cameroon */
    Cm = 'CM',
    /** China */
    Cn = 'CN',
    /** Colombia */
    Co = 'CO',
    /** Costa Rica */
    Cr = 'CR',
    /** Cuba */
    Cu = 'CU',
    /** Cabo Verde */
    Cv = 'CV',
    /** Curaçao */
    Cw = 'CW',
    /** Christmas Island */
    Cx = 'CX',
    /** Cyprus */
    Cy = 'CY',
    /** Czechia */
    Cz = 'CZ',
    /** Germany */
    De = 'DE',
    /** Djibouti */
    Dj = 'DJ',
    /** Denmark */
    Dk = 'DK',
    /** Dominica */
    Dm = 'DM',
    /** Dominican Republic */
    Do = 'DO',
    /** Algeria */
    Dz = 'DZ',
    /** Ecuador */
    Ec = 'EC',
    /** Estonia */
    Ee = 'EE',
    /** Egypt */
    Eg = 'EG',
    /** Western Sahara */
    Eh = 'EH',
    /** Eritrea */
    Er = 'ER',
    /** Spain */
    Es = 'ES',
    /** Ethiopia */
    Et = 'ET',
    /** Finland */
    Fi = 'FI',
    /** Fiji */
    Fj = 'FJ',
    /** Falkland Islands (Malvinas) */
    Fk = 'FK',
    /** Micronesia (Federated States of) */
    Fm = 'FM',
    /** Faroe Islands */
    Fo = 'FO',
    /** France */
    Fr = 'FR',
    /** Gabon */
    Ga = 'GA',
    /** United Kingdom */
    Gb = 'GB',
    /** Grenada */
    Gd = 'GD',
    /** Georgia */
    Ge = 'GE',
    /** French Guiana */
    Gf = 'GF',
    /** Guernsey */
    Gg = 'GG',
    /** Ghana */
    Gh = 'GH',
    /** Gibraltar */
    Gi = 'GI',
    /** Greenland */
    Gl = 'GL',
    /** Gambia */
    Gm = 'GM',
    /** Guinea */
    Gn = 'GN',
    /** Guadeloupe */
    Gp = 'GP',
    /** Equatorial Guinea */
    Gq = 'GQ',
    /** Greece */
    Gr = 'GR',
    /** South Georgia and the South Sandwich Islands */
    Gs = 'GS',
    /** Guatemala */
    Gt = 'GT',
    /** Guam */
    Gu = 'GU',
    /** Guinea-Bissau */
    Gw = 'GW',
    /** Guyana */
    Gy = 'GY',
    /** Hong Kong */
    Hk = 'HK',
    /** Heard Island and McDonald Islands */
    Hm = 'HM',
    /** Honduras */
    Hn = 'HN',
    /** Croatia */
    Hr = 'HR',
    /** Haiti */
    Ht = 'HT',
    /** Hungary */
    Hu = 'HU',
    /** Indonesia */
    Id = 'ID',
    /** Ireland */
    Ie = 'IE',
    /** Israel */
    Il = 'IL',
    /** Isle of Man */
    Im = 'IM',
    /** India */
    In = 'IN',
    /** British Indian Ocean Territory */
    Io = 'IO',
    /** Iraq */
    Iq = 'IQ',
    /** Iran */
    Ir = 'IR',
    /** Iceland */
    Is = 'IS',
    /** Italy */
    It = 'IT',
    /** Jersey */
    Je = 'JE',
    /** Jamaica */
    Jm = 'JM',
    /** Jordan */
    Jo = 'JO',
    /** Japan */
    Jp = 'JP',
    /** Kenya */
    Ke = 'KE',
    /** Kyrgyzstan */
    Kg = 'KG',
    /** Cambodia */
    Kh = 'KH',
    /** Kiribati */
    Ki = 'KI',
    /** Comoros */
    Km = 'KM',
    /** Saint Kitts and Nevis */
    Kn = 'KN',
    /** North Korea */
    Kp = 'KP',
    /** South Korea */
    Kr = 'KR',
    /** Kuwait */
    Kw = 'KW',
    /** Cayman Islands */
    Ky = 'KY',
    /** Kazakhstan */
    Kz = 'KZ',
    /** Laos */
    La = 'LA',
    /** Lebanon */
    Lb = 'LB',
    /** Saint Lucia */
    Lc = 'LC',
    /** Liechtenstein */
    Li = 'LI',
    /** Sri Lanka */
    Lk = 'LK',
    /** Liberia */
    Lr = 'LR',
    /** Lesotho */
    Ls = 'LS',
    /** Lithuania */
    Lt = 'LT',
    /** Luxembourg */
    Lu = 'LU',
    /** Latvia */
    Lv = 'LV',
    /** Libya */
    Ly = 'LY',
    /** Morocco */
    Ma = 'MA',
    /** Monaco */
    Mc = 'MC',
    /** Moldova */
    Md = 'MD',
    /** Montenegro */
    Me = 'ME',
    /** Saint Martin (French part) */
    Mf = 'MF',
    /** Madagascar */
    Mg = 'MG',
    /** Marshall Islands */
    Mh = 'MH',
    /** North Macedonia */
    Mk = 'MK',
    /** Mali */
    Ml = 'ML',
    /** Myanmar */
    Mm = 'MM',
    /** Mongolia */
    Mn = 'MN',
    /** Macao */
    Mo = 'MO',
    /** Northern Mariana Islands */
    Mp = 'MP',
    /** Martinique */
    Mq = 'MQ',
    /** Mauritania */
    Mr = 'MR',
    /** Montserrat */
    Ms = 'MS',
    /** Malta */
    Mt = 'MT',
    /** Mauritius */
    Mu = 'MU',
    /** Maldives */
    Mv = 'MV',
    /** Malawi */
    Mw = 'MW',
    /** Mexico */
    Mx = 'MX',
    /** Malaysia */
    My = 'MY',
    /** Mozambique */
    Mz = 'MZ',
    /** Namibia */
    Na = 'NA',
    /** New Caledonia */
    Nc = 'NC',
    /** Niger */
    Ne = 'NE',
    /** Norfolk Island */
    Nf = 'NF',
    /** Nigeria */
    Ng = 'NG',
    /** Nicaragua */
    Ni = 'NI',
    /** Netherlands */
    Nl = 'NL',
    /** Norway */
    No = 'NO',
    /** Nepal */
    Np = 'NP',
    /** Nauru */
    Nr = 'NR',
    /** Niue */
    Nu = 'NU',
    /** New Zealand */
    Nz = 'NZ',
    /** Oman */
    Om = 'OM',
    /** Panama */
    Pa = 'PA',
    /** Peru */
    Pe = 'PE',
    /** French Polynesia */
    Pf = 'PF',
    /** Papua New Guinea */
    Pg = 'PG',
    /** Philippines */
    Ph = 'PH',
    /** Pakistan */
    Pk = 'PK',
    /** Poland */
    Pl = 'PL',
    /** Saint Pierre and Miquelon */
    Pm = 'PM',
    /** Pitcairn */
    Pn = 'PN',
    /** Puerto Rico */
    Pr = 'PR',
    /** Palestine, State of */
    Ps = 'PS',
    /** Portugal */
    Pt = 'PT',
    /** Palau */
    Pw = 'PW',
    /** Paraguay */
    Py = 'PY',
    /** Qatar */
    Qa = 'QA',
    /** Réunion */
    Re = 'RE',
    /** Romania */
    Ro = 'RO',
    /** Serbia */
    Rs = 'RS',
    /** Russia */
    Ru = 'RU',
    /** Rwanda */
    Rw = 'RW',
    /** Saudi Arabia */
    Sa = 'SA',
    /** Solomon Islands */
    Sb = 'SB',
    /** Seychelles */
    Sc = 'SC',
    /** Sudan */
    Sd = 'SD',
    /** Sweden */
    Se = 'SE',
    /** Singapore */
    Sg = 'SG',
    /** Saint Helena, Ascension and Tristan da Cunha */
    Sh = 'SH',
    /** Slovenia */
    Si = 'SI',
    /** Svalbard and Jan Mayen */
    Sj = 'SJ',
    /** Slovakia */
    Sk = 'SK',
    /** Sierra Leone */
    Sl = 'SL',
    /** San Marino */
    Sm = 'SM',
    /** Senegal */
    Sn = 'SN',
    /** Somalia */
    So = 'SO',
    /** Suriname */
    Sr = 'SR',
    /** South Sudan */
    Ss = 'SS',
    /** Sao Tome and Principe */
    St = 'ST',
    /** El Salvador */
    Sv = 'SV',
    /** Sint Maarten (Dutch part) */
    Sx = 'SX',
    /** Syria */
    Sy = 'SY',
    /** Eswatini */
    Sz = 'SZ',
    /** Turks and Caicos Islands */
    Tc = 'TC',
    /** Chad */
    Td = 'TD',
    /** French Southern Territories */
    Tf = 'TF',
    /** Togo */
    Tg = 'TG',
    /** Thailand */
    Th = 'TH',
    /** Tajikistan */
    Tj = 'TJ',
    /** Tokelau */
    Tk = 'TK',
    /** Timor-Leste */
    Tl = 'TL',
    /** Turkmenistan */
    Tm = 'TM',
    /** Tunisia */
    Tn = 'TN',
    /** Tonga */
    To = 'TO',
    /** Turkey */
    Tr = 'TR',
    /** Trinidad and Tobago */
    Tt = 'TT',
    /** Tuvalu */
    Tv = 'TV',
    /** Taiwan */
    Tw = 'TW',
    /** Tanzania */
    Tz = 'TZ',
    /** Ukraine */
    Ua = 'UA',
    /** Uganda */
    Ug = 'UG',
    /** United States Minor Outlying Islands */
    Um = 'UM',
    /** United States of America */
    Us = 'US',
    /** Uruguay */
    Uy = 'UY',
    /** Uzbekistan */
    Uz = 'UZ',
    /** Holy See */
    Va = 'VA',
    /** Saint Vincent and the Grenadines */
    Vc = 'VC',
    /** Venezuela */
    Ve = 'VE',
    /** Virgin Islands (British) */
    Vg = 'VG',
    /** Virgin Islands (U.S.) */
    Vi = 'VI',
    /** Vietnam */
    Vn = 'VN',
    /** Vanuatu */
    Vu = 'VU',
    /** Wallis and Futuna */
    Wf = 'WF',
    /** Samoa */
    Ws = 'WS',
    /** Yemen */
    Ye = 'YE',
    /** Mayotte */
    Yt = 'YT',
    /** South Africa */
    Za = 'ZA',
    /** Zambia */
    Zm = 'ZM',
    /** Zimbabwe */
    Zw = 'ZW',
}

/** An enumeration. */
export enum AccountsUserStateChoices {
    /** Abia */
    Abia = 'ABIA',
    /** Adamawa */
    Adamawa = 'ADAMAWA',
    /** Akwa Ibom */
    AkwaIbom = 'AKWA_IBOM',
    /** Anambra */
    Anambra = 'ANAMBRA',
    /** Bauchi */
    Bauchi = 'BAUCHI',
    /** Bayelsa */
    Bayelsa = 'BAYELSA',
    /** Benue */
    Benue = 'BENUE',
    /** Borno */
    Borno = 'BORNO',
    /** Cross River */
    CrossRiver = 'CROSS_RIVER',
    /** Delta */
    Delta = 'DELTA',
    /** Ebonyi */
    Ebonyi = 'EBONYI',
    /** Edo */
    Edo = 'EDO',
    /** Ekiti */
    Ekiti = 'EKITI',
    /** Enugu */
    Enugu = 'ENUGU',
    /** FCT - Abuja */
    FctAbuja = 'FCT_ABUJA',
    /** Gombe */
    Gombe = 'GOMBE',
    /** Imo */
    Imo = 'IMO',
    /** Jigawa */
    Jigawa = 'JIGAWA',
    /** Kaduna */
    Kaduna = 'KADUNA',
    /** Kano */
    Kano = 'KANO',
    /** Katsina */
    Katsina = 'KATSINA',
    /** Kebbi */
    Kebbi = 'KEBBI',
    /** Kogi */
    Kogi = 'KOGI',
    /** Kwara */
    Kwara = 'KWARA',
    /** Lagos */
    Lagos = 'LAGOS',
    /** Nasarawa */
    Nasarawa = 'NASARAWA',
    /** Niger */
    Niger = 'NIGER',
    /** Ogun */
    Ogun = 'OGUN',
    /** Ondo */
    Ondo = 'ONDO',
    /** Osun */
    Osun = 'OSUN',
    /** Outside of Nigeria */
    OutsideOfNigeria = 'OUTSIDE_OF_NIGERIA',
    /** Oyo */
    Oyo = 'OYO',
    /** Plateau */
    Plateau = 'PLATEAU',
    /** Rivers */
    Rivers = 'RIVERS',
    /** Sokoto */
    Sokoto = 'SOKOTO',
    /** Taraba */
    Taraba = 'TARABA',
    /** Yobe */
    Yobe = 'YOBE',
    /** Zamfara */
    Zamfara = 'ZAMFARA',
}

/** An enumeration. */
export enum AccountsUserTimezoneChoices {
    /** Africa/Abidjan */
    AfricaAbidjan = 'AFRICA_ABIDJAN',
    /** Africa/Accra */
    AfricaAccra = 'AFRICA_ACCRA',
    /** Africa/Addis_Ababa */
    AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
    /** Africa/Algiers */
    AfricaAlgiers = 'AFRICA_ALGIERS',
    /** Africa/Asmara */
    AfricaAsmara = 'AFRICA_ASMARA',
    /** Africa/Bamako */
    AfricaBamako = 'AFRICA_BAMAKO',
    /** Africa/Bangui */
    AfricaBangui = 'AFRICA_BANGUI',
    /** Africa/Banjul */
    AfricaBanjul = 'AFRICA_BANJUL',
    /** Africa/Bissau */
    AfricaBissau = 'AFRICA_BISSAU',
    /** Africa/Blantyre */
    AfricaBlantyre = 'AFRICA_BLANTYRE',
    /** Africa/Brazzaville */
    AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
    /** Africa/Bujumbura */
    AfricaBujumbura = 'AFRICA_BUJUMBURA',
    /** Africa/Cairo */
    AfricaCairo = 'AFRICA_CAIRO',
    /** Africa/Casablanca */
    AfricaCasablanca = 'AFRICA_CASABLANCA',
    /** Africa/Ceuta */
    AfricaCeuta = 'AFRICA_CEUTA',
    /** Africa/Conakry */
    AfricaConakry = 'AFRICA_CONAKRY',
    /** Africa/Dakar */
    AfricaDakar = 'AFRICA_DAKAR',
    /** Africa/Dar_es_Salaam */
    AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
    /** Africa/Djibouti */
    AfricaDjibouti = 'AFRICA_DJIBOUTI',
    /** Africa/Douala */
    AfricaDouala = 'AFRICA_DOUALA',
    /** Africa/El_Aaiun */
    AfricaElAaiun = 'AFRICA_EL_AAIUN',
    /** Africa/Freetown */
    AfricaFreetown = 'AFRICA_FREETOWN',
    /** Africa/Gaborone */
    AfricaGaborone = 'AFRICA_GABORONE',
    /** Africa/Harare */
    AfricaHarare = 'AFRICA_HARARE',
    /** Africa/Johannesburg */
    AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
    /** Africa/Juba */
    AfricaJuba = 'AFRICA_JUBA',
    /** Africa/Kampala */
    AfricaKampala = 'AFRICA_KAMPALA',
    /** Africa/Khartoum */
    AfricaKhartoum = 'AFRICA_KHARTOUM',
    /** Africa/Kigali */
    AfricaKigali = 'AFRICA_KIGALI',
    /** Africa/Kinshasa */
    AfricaKinshasa = 'AFRICA_KINSHASA',
    /** Africa/Lagos */
    AfricaLagos = 'AFRICA_LAGOS',
    /** Africa/Libreville */
    AfricaLibreville = 'AFRICA_LIBREVILLE',
    /** Africa/Lome */
    AfricaLome = 'AFRICA_LOME',
    /** Africa/Luanda */
    AfricaLuanda = 'AFRICA_LUANDA',
    /** Africa/Lubumbashi */
    AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
    /** Africa/Lusaka */
    AfricaLusaka = 'AFRICA_LUSAKA',
    /** Africa/Malabo */
    AfricaMalabo = 'AFRICA_MALABO',
    /** Africa/Maputo */
    AfricaMaputo = 'AFRICA_MAPUTO',
    /** Africa/Maseru */
    AfricaMaseru = 'AFRICA_MASERU',
    /** Africa/Mbabane */
    AfricaMbabane = 'AFRICA_MBABANE',
    /** Africa/Mogadishu */
    AfricaMogadishu = 'AFRICA_MOGADISHU',
    /** Africa/Monrovia */
    AfricaMonrovia = 'AFRICA_MONROVIA',
    /** Africa/Nairobi */
    AfricaNairobi = 'AFRICA_NAIROBI',
    /** Africa/Ndjamena */
    AfricaNdjamena = 'AFRICA_NDJAMENA',
    /** Africa/Niamey */
    AfricaNiamey = 'AFRICA_NIAMEY',
    /** Africa/Nouakchott */
    AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
    /** Africa/Ouagadougou */
    AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
    /** Africa/Porto-Novo */
    AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
    /** Africa/Sao_Tome */
    AfricaSaoTome = 'AFRICA_SAO_TOME',
    /** Africa/Tripoli */
    AfricaTripoli = 'AFRICA_TRIPOLI',
    /** Africa/Tunis */
    AfricaTunis = 'AFRICA_TUNIS',
    /** Africa/Windhoek */
    AfricaWindhoek = 'AFRICA_WINDHOEK',
    /** America/Adak */
    AmericaAdak = 'AMERICA_ADAK',
    /** America/Anchorage */
    AmericaAnchorage = 'AMERICA_ANCHORAGE',
    /** America/Anguilla */
    AmericaAnguilla = 'AMERICA_ANGUILLA',
    /** America/Antigua */
    AmericaAntigua = 'AMERICA_ANTIGUA',
    /** America/Araguaina */
    AmericaAraguaina = 'AMERICA_ARAGUAINA',
    /** America/Argentina/Buenos_Aires */
    AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
    /** America/Argentina/Catamarca */
    AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
    /** America/Argentina/Cordoba */
    AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
    /** America/Argentina/Jujuy */
    AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
    /** America/Argentina/La_Rioja */
    AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
    /** America/Argentina/Mendoza */
    AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
    /** America/Argentina/Rio_Gallegos */
    AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
    /** America/Argentina/Salta */
    AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
    /** America/Argentina/San_Juan */
    AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
    /** America/Argentina/San_Luis */
    AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
    /** America/Argentina/Tucuman */
    AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
    /** America/Argentina/Ushuaia */
    AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
    /** America/Aruba */
    AmericaAruba = 'AMERICA_ARUBA',
    /** America/Asuncion */
    AmericaAsuncion = 'AMERICA_ASUNCION',
    /** America/Atikokan */
    AmericaAtikokan = 'AMERICA_ATIKOKAN',
    /** America/Bahia */
    AmericaBahia = 'AMERICA_BAHIA',
    /** America/Bahia_Banderas */
    AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
    /** America/Barbados */
    AmericaBarbados = 'AMERICA_BARBADOS',
    /** America/Belem */
    AmericaBelem = 'AMERICA_BELEM',
    /** America/Belize */
    AmericaBelize = 'AMERICA_BELIZE',
    /** America/Blanc-Sablon */
    AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
    /** America/Boa_Vista */
    AmericaBoaVista = 'AMERICA_BOA_VISTA',
    /** America/Bogota */
    AmericaBogota = 'AMERICA_BOGOTA',
    /** America/Boise */
    AmericaBoise = 'AMERICA_BOISE',
    /** America/Cambridge_Bay */
    AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
    /** America/Campo_Grande */
    AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
    /** America/Cancun */
    AmericaCancun = 'AMERICA_CANCUN',
    /** America/Caracas */
    AmericaCaracas = 'AMERICA_CARACAS',
    /** America/Cayenne */
    AmericaCayenne = 'AMERICA_CAYENNE',
    /** America/Cayman */
    AmericaCayman = 'AMERICA_CAYMAN',
    /** America/Chicago */
    AmericaChicago = 'AMERICA_CHICAGO',
    /** America/Chihuahua */
    AmericaChihuahua = 'AMERICA_CHIHUAHUA',
    /** America/Costa_Rica */
    AmericaCostaRica = 'AMERICA_COSTA_RICA',
    /** America/Creston */
    AmericaCreston = 'AMERICA_CRESTON',
    /** America/Cuiaba */
    AmericaCuiaba = 'AMERICA_CUIABA',
    /** America/Curacao */
    AmericaCuracao = 'AMERICA_CURACAO',
    /** America/Danmarkshavn */
    AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
    /** America/Dawson */
    AmericaDawson = 'AMERICA_DAWSON',
    /** America/Dawson_Creek */
    AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
    /** America/Denver */
    AmericaDenver = 'AMERICA_DENVER',
    /** America/Detroit */
    AmericaDetroit = 'AMERICA_DETROIT',
    /** America/Dominica */
    AmericaDominica = 'AMERICA_DOMINICA',
    /** America/Edmonton */
    AmericaEdmonton = 'AMERICA_EDMONTON',
    /** America/Eirunepe */
    AmericaEirunepe = 'AMERICA_EIRUNEPE',
    /** America/El_Salvador */
    AmericaElSalvador = 'AMERICA_EL_SALVADOR',
    /** America/Fortaleza */
    AmericaFortaleza = 'AMERICA_FORTALEZA',
    /** America/Fort_Nelson */
    AmericaFortNelson = 'AMERICA_FORT_NELSON',
    /** America/Glace_Bay */
    AmericaGlaceBay = 'AMERICA_GLACE_BAY',
    /** America/Goose_Bay */
    AmericaGooseBay = 'AMERICA_GOOSE_BAY',
    /** America/Grand_Turk */
    AmericaGrandTurk = 'AMERICA_GRAND_TURK',
    /** America/Grenada */
    AmericaGrenada = 'AMERICA_GRENADA',
    /** America/Guadeloupe */
    AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
    /** America/Guatemala */
    AmericaGuatemala = 'AMERICA_GUATEMALA',
    /** America/Guayaquil */
    AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
    /** America/Guyana */
    AmericaGuyana = 'AMERICA_GUYANA',
    /** America/Halifax */
    AmericaHalifax = 'AMERICA_HALIFAX',
    /** America/Havana */
    AmericaHavana = 'AMERICA_HAVANA',
    /** America/Hermosillo */
    AmericaHermosillo = 'AMERICA_HERMOSILLO',
    /** America/Indiana/Indianapolis */
    AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
    /** America/Indiana/Knox */
    AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
    /** America/Indiana/Marengo */
    AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
    /** America/Indiana/Petersburg */
    AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
    /** America/Indiana/Tell_City */
    AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
    /** America/Indiana/Vevay */
    AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
    /** America/Indiana/Vincennes */
    AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
    /** America/Indiana/Winamac */
    AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
    /** America/Inuvik */
    AmericaInuvik = 'AMERICA_INUVIK',
    /** America/Iqaluit */
    AmericaIqaluit = 'AMERICA_IQALUIT',
    /** America/Jamaica */
    AmericaJamaica = 'AMERICA_JAMAICA',
    /** America/Juneau */
    AmericaJuneau = 'AMERICA_JUNEAU',
    /** America/Kentucky/Louisville */
    AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
    /** America/Kentucky/Monticello */
    AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
    /** America/Kralendijk */
    AmericaKralendijk = 'AMERICA_KRALENDIJK',
    /** America/La_Paz */
    AmericaLaPaz = 'AMERICA_LA_PAZ',
    /** America/Lima */
    AmericaLima = 'AMERICA_LIMA',
    /** America/Los_Angeles */
    AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
    /** America/Lower_Princes */
    AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
    /** America/Maceio */
    AmericaMaceio = 'AMERICA_MACEIO',
    /** America/Managua */
    AmericaManagua = 'AMERICA_MANAGUA',
    /** America/Manaus */
    AmericaManaus = 'AMERICA_MANAUS',
    /** America/Marigot */
    AmericaMarigot = 'AMERICA_MARIGOT',
    /** America/Martinique */
    AmericaMartinique = 'AMERICA_MARTINIQUE',
    /** America/Matamoros */
    AmericaMatamoros = 'AMERICA_MATAMOROS',
    /** America/Mazatlan */
    AmericaMazatlan = 'AMERICA_MAZATLAN',
    /** America/Menominee */
    AmericaMenominee = 'AMERICA_MENOMINEE',
    /** America/Merida */
    AmericaMerida = 'AMERICA_MERIDA',
    /** America/Metlakatla */
    AmericaMetlakatla = 'AMERICA_METLAKATLA',
    /** America/Mexico_City */
    AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
    /** America/Miquelon */
    AmericaMiquelon = 'AMERICA_MIQUELON',
    /** America/Moncton */
    AmericaMoncton = 'AMERICA_MONCTON',
    /** America/Monterrey */
    AmericaMonterrey = 'AMERICA_MONTERREY',
    /** America/Montevideo */
    AmericaMontevideo = 'AMERICA_MONTEVIDEO',
    /** America/Montserrat */
    AmericaMontserrat = 'AMERICA_MONTSERRAT',
    /** America/Nassau */
    AmericaNassau = 'AMERICA_NASSAU',
    /** America/New_York */
    AmericaNewYork = 'AMERICA_NEW_YORK',
    /** America/Nipigon */
    AmericaNipigon = 'AMERICA_NIPIGON',
    /** America/Nome */
    AmericaNome = 'AMERICA_NOME',
    /** America/Noronha */
    AmericaNoronha = 'AMERICA_NORONHA',
    /** America/North_Dakota/Beulah */
    AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
    /** America/North_Dakota/Center */
    AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
    /** America/North_Dakota/New_Salem */
    AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
    /** America/Nuuk */
    AmericaNuuk = 'AMERICA_NUUK',
    /** America/Ojinaga */
    AmericaOjinaga = 'AMERICA_OJINAGA',
    /** America/Panama */
    AmericaPanama = 'AMERICA_PANAMA',
    /** America/Pangnirtung */
    AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
    /** America/Paramaribo */
    AmericaParamaribo = 'AMERICA_PARAMARIBO',
    /** America/Phoenix */
    AmericaPhoenix = 'AMERICA_PHOENIX',
    /** America/Porto_Velho */
    AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
    /** America/Port-au-Prince */
    AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
    /** America/Port_of_Spain */
    AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
    /** America/Puerto_Rico */
    AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
    /** America/Punta_Arenas */
    AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
    /** America/Rainy_River */
    AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
    /** America/Rankin_Inlet */
    AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
    /** America/Recife */
    AmericaRecife = 'AMERICA_RECIFE',
    /** America/Regina */
    AmericaRegina = 'AMERICA_REGINA',
    /** America/Resolute */
    AmericaResolute = 'AMERICA_RESOLUTE',
    /** America/Rio_Branco */
    AmericaRioBranco = 'AMERICA_RIO_BRANCO',
    /** America/Santarem */
    AmericaSantarem = 'AMERICA_SANTAREM',
    /** America/Santiago */
    AmericaSantiago = 'AMERICA_SANTIAGO',
    /** America/Santo_Domingo */
    AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
    /** America/Sao_Paulo */
    AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
    /** America/Scoresbysund */
    AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
    /** America/Sitka */
    AmericaSitka = 'AMERICA_SITKA',
    /** America/St_Barthelemy */
    AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
    /** America/St_Johns */
    AmericaStJohns = 'AMERICA_ST_JOHNS',
    /** America/St_Kitts */
    AmericaStKitts = 'AMERICA_ST_KITTS',
    /** America/St_Lucia */
    AmericaStLucia = 'AMERICA_ST_LUCIA',
    /** America/St_Thomas */
    AmericaStThomas = 'AMERICA_ST_THOMAS',
    /** America/St_Vincent */
    AmericaStVincent = 'AMERICA_ST_VINCENT',
    /** America/Swift_Current */
    AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
    /** America/Tegucigalpa */
    AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
    /** America/Thule */
    AmericaThule = 'AMERICA_THULE',
    /** America/Thunder_Bay */
    AmericaThunderBay = 'AMERICA_THUNDER_BAY',
    /** America/Tijuana */
    AmericaTijuana = 'AMERICA_TIJUANA',
    /** America/Toronto */
    AmericaToronto = 'AMERICA_TORONTO',
    /** America/Tortola */
    AmericaTortola = 'AMERICA_TORTOLA',
    /** America/Vancouver */
    AmericaVancouver = 'AMERICA_VANCOUVER',
    /** America/Whitehorse */
    AmericaWhitehorse = 'AMERICA_WHITEHORSE',
    /** America/Winnipeg */
    AmericaWinnipeg = 'AMERICA_WINNIPEG',
    /** America/Yakutat */
    AmericaYakutat = 'AMERICA_YAKUTAT',
    /** America/Yellowknife */
    AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
    /** Antarctica/Casey */
    AntarcticaCasey = 'ANTARCTICA_CASEY',
    /** Antarctica/Davis */
    AntarcticaDavis = 'ANTARCTICA_DAVIS',
    /** Antarctica/DumontDUrville */
    AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
    /** Antarctica/Macquarie */
    AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
    /** Antarctica/Mawson */
    AntarcticaMawson = 'ANTARCTICA_MAWSON',
    /** Antarctica/McMurdo */
    AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
    /** Antarctica/Palmer */
    AntarcticaPalmer = 'ANTARCTICA_PALMER',
    /** Antarctica/Rothera */
    AntarcticaRothera = 'ANTARCTICA_ROTHERA',
    /** Antarctica/Syowa */
    AntarcticaSyowa = 'ANTARCTICA_SYOWA',
    /** Antarctica/Troll */
    AntarcticaTroll = 'ANTARCTICA_TROLL',
    /** Antarctica/Vostok */
    AntarcticaVostok = 'ANTARCTICA_VOSTOK',
    /** Arctic/Longyearbyen */
    ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
    /** Asia/Aden */
    AsiaAden = 'ASIA_ADEN',
    /** Asia/Almaty */
    AsiaAlmaty = 'ASIA_ALMATY',
    /** Asia/Amman */
    AsiaAmman = 'ASIA_AMMAN',
    /** Asia/Anadyr */
    AsiaAnadyr = 'ASIA_ANADYR',
    /** Asia/Aqtau */
    AsiaAqtau = 'ASIA_AQTAU',
    /** Asia/Aqtobe */
    AsiaAqtobe = 'ASIA_AQTOBE',
    /** Asia/Ashgabat */
    AsiaAshgabat = 'ASIA_ASHGABAT',
    /** Asia/Atyrau */
    AsiaAtyrau = 'ASIA_ATYRAU',
    /** Asia/Baghdad */
    AsiaBaghdad = 'ASIA_BAGHDAD',
    /** Asia/Bahrain */
    AsiaBahrain = 'ASIA_BAHRAIN',
    /** Asia/Baku */
    AsiaBaku = 'ASIA_BAKU',
    /** Asia/Bangkok */
    AsiaBangkok = 'ASIA_BANGKOK',
    /** Asia/Barnaul */
    AsiaBarnaul = 'ASIA_BARNAUL',
    /** Asia/Beirut */
    AsiaBeirut = 'ASIA_BEIRUT',
    /** Asia/Bishkek */
    AsiaBishkek = 'ASIA_BISHKEK',
    /** Asia/Brunei */
    AsiaBrunei = 'ASIA_BRUNEI',
    /** Asia/Chita */
    AsiaChita = 'ASIA_CHITA',
    /** Asia/Choibalsan */
    AsiaChoibalsan = 'ASIA_CHOIBALSAN',
    /** Asia/Colombo */
    AsiaColombo = 'ASIA_COLOMBO',
    /** Asia/Damascus */
    AsiaDamascus = 'ASIA_DAMASCUS',
    /** Asia/Dhaka */
    AsiaDhaka = 'ASIA_DHAKA',
    /** Asia/Dili */
    AsiaDili = 'ASIA_DILI',
    /** Asia/Dubai */
    AsiaDubai = 'ASIA_DUBAI',
    /** Asia/Dushanbe */
    AsiaDushanbe = 'ASIA_DUSHANBE',
    /** Asia/Famagusta */
    AsiaFamagusta = 'ASIA_FAMAGUSTA',
    /** Asia/Gaza */
    AsiaGaza = 'ASIA_GAZA',
    /** Asia/Hebron */
    AsiaHebron = 'ASIA_HEBRON',
    /** Asia/Hong_Kong */
    AsiaHongKong = 'ASIA_HONG_KONG',
    /** Asia/Hovd */
    AsiaHovd = 'ASIA_HOVD',
    /** Asia/Ho_Chi_Minh */
    AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
    /** Asia/Irkutsk */
    AsiaIrkutsk = 'ASIA_IRKUTSK',
    /** Asia/Jakarta */
    AsiaJakarta = 'ASIA_JAKARTA',
    /** Asia/Jayapura */
    AsiaJayapura = 'ASIA_JAYAPURA',
    /** Asia/Jerusalem */
    AsiaJerusalem = 'ASIA_JERUSALEM',
    /** Asia/Kabul */
    AsiaKabul = 'ASIA_KABUL',
    /** Asia/Kamchatka */
    AsiaKamchatka = 'ASIA_KAMCHATKA',
    /** Asia/Karachi */
    AsiaKarachi = 'ASIA_KARACHI',
    /** Asia/Kathmandu */
    AsiaKathmandu = 'ASIA_KATHMANDU',
    /** Asia/Khandyga */
    AsiaKhandyga = 'ASIA_KHANDYGA',
    /** Asia/Kolkata */
    AsiaKolkata = 'ASIA_KOLKATA',
    /** Asia/Krasnoyarsk */
    AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
    /** Asia/Kuala_Lumpur */
    AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
    /** Asia/Kuching */
    AsiaKuching = 'ASIA_KUCHING',
    /** Asia/Kuwait */
    AsiaKuwait = 'ASIA_KUWAIT',
    /** Asia/Macau */
    AsiaMacau = 'ASIA_MACAU',
    /** Asia/Magadan */
    AsiaMagadan = 'ASIA_MAGADAN',
    /** Asia/Makassar */
    AsiaMakassar = 'ASIA_MAKASSAR',
    /** Asia/Manila */
    AsiaManila = 'ASIA_MANILA',
    /** Asia/Muscat */
    AsiaMuscat = 'ASIA_MUSCAT',
    /** Asia/Nicosia */
    AsiaNicosia = 'ASIA_NICOSIA',
    /** Asia/Novokuznetsk */
    AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
    /** Asia/Novosibirsk */
    AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
    /** Asia/Omsk */
    AsiaOmsk = 'ASIA_OMSK',
    /** Asia/Oral */
    AsiaOral = 'ASIA_ORAL',
    /** Asia/Phnom_Penh */
    AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
    /** Asia/Pontianak */
    AsiaPontianak = 'ASIA_PONTIANAK',
    /** Asia/Pyongyang */
    AsiaPyongyang = 'ASIA_PYONGYANG',
    /** Asia/Qatar */
    AsiaQatar = 'ASIA_QATAR',
    /** Asia/Qostanay */
    AsiaQostanay = 'ASIA_QOSTANAY',
    /** Asia/Qyzylorda */
    AsiaQyzylorda = 'ASIA_QYZYLORDA',
    /** Asia/Riyadh */
    AsiaRiyadh = 'ASIA_RIYADH',
    /** Asia/Sakhalin */
    AsiaSakhalin = 'ASIA_SAKHALIN',
    /** Asia/Samarkand */
    AsiaSamarkand = 'ASIA_SAMARKAND',
    /** Asia/Seoul */
    AsiaSeoul = 'ASIA_SEOUL',
    /** Asia/Shanghai */
    AsiaShanghai = 'ASIA_SHANGHAI',
    /** Asia/Singapore */
    AsiaSingapore = 'ASIA_SINGAPORE',
    /** Asia/Srednekolymsk */
    AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
    /** Asia/Taipei */
    AsiaTaipei = 'ASIA_TAIPEI',
    /** Asia/Tashkent */
    AsiaTashkent = 'ASIA_TASHKENT',
    /** Asia/Tbilisi */
    AsiaTbilisi = 'ASIA_TBILISI',
    /** Asia/Tehran */
    AsiaTehran = 'ASIA_TEHRAN',
    /** Asia/Thimphu */
    AsiaThimphu = 'ASIA_THIMPHU',
    /** Asia/Tokyo */
    AsiaTokyo = 'ASIA_TOKYO',
    /** Asia/Tomsk */
    AsiaTomsk = 'ASIA_TOMSK',
    /** Asia/Ulaanbaatar */
    AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
    /** Asia/Urumqi */
    AsiaUrumqi = 'ASIA_URUMQI',
    /** Asia/Ust-Nera */
    AsiaUstNera = 'ASIA_UST_NERA',
    /** Asia/Vientiane */
    AsiaVientiane = 'ASIA_VIENTIANE',
    /** Asia/Vladivostok */
    AsiaVladivostok = 'ASIA_VLADIVOSTOK',
    /** Asia/Yakutsk */
    AsiaYakutsk = 'ASIA_YAKUTSK',
    /** Asia/Yangon */
    AsiaYangon = 'ASIA_YANGON',
    /** Asia/Yekaterinburg */
    AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
    /** Asia/Yerevan */
    AsiaYerevan = 'ASIA_YEREVAN',
    /** Atlantic/Azores */
    AtlanticAzores = 'ATLANTIC_AZORES',
    /** Atlantic/Bermuda */
    AtlanticBermuda = 'ATLANTIC_BERMUDA',
    /** Atlantic/Canary */
    AtlanticCanary = 'ATLANTIC_CANARY',
    /** Atlantic/Cape_Verde */
    AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
    /** Atlantic/Faroe */
    AtlanticFaroe = 'ATLANTIC_FAROE',
    /** Atlantic/Madeira */
    AtlanticMadeira = 'ATLANTIC_MADEIRA',
    /** Atlantic/Reykjavik */
    AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
    /** Atlantic/South_Georgia */
    AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
    /** Atlantic/Stanley */
    AtlanticStanley = 'ATLANTIC_STANLEY',
    /** Atlantic/St_Helena */
    AtlanticStHelena = 'ATLANTIC_ST_HELENA',
    /** Australia/Adelaide */
    AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
    /** Australia/Brisbane */
    AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
    /** Australia/Broken_Hill */
    AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
    /** Australia/Currie */
    AustraliaCurrie = 'AUSTRALIA_CURRIE',
    /** Australia/Darwin */
    AustraliaDarwin = 'AUSTRALIA_DARWIN',
    /** Australia/Eucla */
    AustraliaEucla = 'AUSTRALIA_EUCLA',
    /** Australia/Hobart */
    AustraliaHobart = 'AUSTRALIA_HOBART',
    /** Australia/Lindeman */
    AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
    /** Australia/Lord_Howe */
    AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
    /** Australia/Melbourne */
    AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
    /** Australia/Perth */
    AustraliaPerth = 'AUSTRALIA_PERTH',
    /** Australia/Sydney */
    AustraliaSydney = 'AUSTRALIA_SYDNEY',
    /** Canada/Atlantic */
    CanadaAtlantic = 'CANADA_ATLANTIC',
    /** Canada/Central */
    CanadaCentral = 'CANADA_CENTRAL',
    /** Canada/Eastern */
    CanadaEastern = 'CANADA_EASTERN',
    /** Canada/Mountain */
    CanadaMountain = 'CANADA_MOUNTAIN',
    /** Canada/Newfoundland */
    CanadaNewfoundland = 'CANADA_NEWFOUNDLAND',
    /** Canada/Pacific */
    CanadaPacific = 'CANADA_PACIFIC',
    /** Europe/Amsterdam */
    EuropeAmsterdam = 'EUROPE_AMSTERDAM',
    /** Europe/Andorra */
    EuropeAndorra = 'EUROPE_ANDORRA',
    /** Europe/Astrakhan */
    EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
    /** Europe/Athens */
    EuropeAthens = 'EUROPE_ATHENS',
    /** Europe/Belgrade */
    EuropeBelgrade = 'EUROPE_BELGRADE',
    /** Europe/Berlin */
    EuropeBerlin = 'EUROPE_BERLIN',
    /** Europe/Bratislava */
    EuropeBratislava = 'EUROPE_BRATISLAVA',
    /** Europe/Brussels */
    EuropeBrussels = 'EUROPE_BRUSSELS',
    /** Europe/Bucharest */
    EuropeBucharest = 'EUROPE_BUCHAREST',
    /** Europe/Budapest */
    EuropeBudapest = 'EUROPE_BUDAPEST',
    /** Europe/Busingen */
    EuropeBusingen = 'EUROPE_BUSINGEN',
    /** Europe/Chisinau */
    EuropeChisinau = 'EUROPE_CHISINAU',
    /** Europe/Copenhagen */
    EuropeCopenhagen = 'EUROPE_COPENHAGEN',
    /** Europe/Dublin */
    EuropeDublin = 'EUROPE_DUBLIN',
    /** Europe/Gibraltar */
    EuropeGibraltar = 'EUROPE_GIBRALTAR',
    /** Europe/Guernsey */
    EuropeGuernsey = 'EUROPE_GUERNSEY',
    /** Europe/Helsinki */
    EuropeHelsinki = 'EUROPE_HELSINKI',
    /** Europe/Isle_of_Man */
    EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
    /** Europe/Istanbul */
    EuropeIstanbul = 'EUROPE_ISTANBUL',
    /** Europe/Jersey */
    EuropeJersey = 'EUROPE_JERSEY',
    /** Europe/Kaliningrad */
    EuropeKaliningrad = 'EUROPE_KALININGRAD',
    /** Europe/Kiev */
    EuropeKiev = 'EUROPE_KIEV',
    /** Europe/Kirov */
    EuropeKirov = 'EUROPE_KIROV',
    /** Europe/Lisbon */
    EuropeLisbon = 'EUROPE_LISBON',
    /** Europe/Ljubljana */
    EuropeLjubljana = 'EUROPE_LJUBLJANA',
    /** Europe/London */
    EuropeLondon = 'EUROPE_LONDON',
    /** Europe/Luxembourg */
    EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
    /** Europe/Madrid */
    EuropeMadrid = 'EUROPE_MADRID',
    /** Europe/Malta */
    EuropeMalta = 'EUROPE_MALTA',
    /** Europe/Mariehamn */
    EuropeMariehamn = 'EUROPE_MARIEHAMN',
    /** Europe/Minsk */
    EuropeMinsk = 'EUROPE_MINSK',
    /** Europe/Monaco */
    EuropeMonaco = 'EUROPE_MONACO',
    /** Europe/Moscow */
    EuropeMoscow = 'EUROPE_MOSCOW',
    /** Europe/Oslo */
    EuropeOslo = 'EUROPE_OSLO',
    /** Europe/Paris */
    EuropeParis = 'EUROPE_PARIS',
    /** Europe/Podgorica */
    EuropePodgorica = 'EUROPE_PODGORICA',
    /** Europe/Prague */
    EuropePrague = 'EUROPE_PRAGUE',
    /** Europe/Riga */
    EuropeRiga = 'EUROPE_RIGA',
    /** Europe/Rome */
    EuropeRome = 'EUROPE_ROME',
    /** Europe/Samara */
    EuropeSamara = 'EUROPE_SAMARA',
    /** Europe/San_Marino */
    EuropeSanMarino = 'EUROPE_SAN_MARINO',
    /** Europe/Sarajevo */
    EuropeSarajevo = 'EUROPE_SARAJEVO',
    /** Europe/Saratov */
    EuropeSaratov = 'EUROPE_SARATOV',
    /** Europe/Simferopol */
    EuropeSimferopol = 'EUROPE_SIMFEROPOL',
    /** Europe/Skopje */
    EuropeSkopje = 'EUROPE_SKOPJE',
    /** Europe/Sofia */
    EuropeSofia = 'EUROPE_SOFIA',
    /** Europe/Stockholm */
    EuropeStockholm = 'EUROPE_STOCKHOLM',
    /** Europe/Tallinn */
    EuropeTallinn = 'EUROPE_TALLINN',
    /** Europe/Tirane */
    EuropeTirane = 'EUROPE_TIRANE',
    /** Europe/Ulyanovsk */
    EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
    /** Europe/Uzhgorod */
    EuropeUzhgorod = 'EUROPE_UZHGOROD',
    /** Europe/Vaduz */
    EuropeVaduz = 'EUROPE_VADUZ',
    /** Europe/Vatican */
    EuropeVatican = 'EUROPE_VATICAN',
    /** Europe/Vienna */
    EuropeVienna = 'EUROPE_VIENNA',
    /** Europe/Vilnius */
    EuropeVilnius = 'EUROPE_VILNIUS',
    /** Europe/Volgograd */
    EuropeVolgograd = 'EUROPE_VOLGOGRAD',
    /** Europe/Warsaw */
    EuropeWarsaw = 'EUROPE_WARSAW',
    /** Europe/Zagreb */
    EuropeZagreb = 'EUROPE_ZAGREB',
    /** Europe/Zaporozhye */
    EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
    /** Europe/Zurich */
    EuropeZurich = 'EUROPE_ZURICH',
    /** GMT */
    Gmt = 'GMT',
    /** Indian/Antananarivo */
    IndianAntananarivo = 'INDIAN_ANTANANARIVO',
    /** Indian/Chagos */
    IndianChagos = 'INDIAN_CHAGOS',
    /** Indian/Christmas */
    IndianChristmas = 'INDIAN_CHRISTMAS',
    /** Indian/Cocos */
    IndianCocos = 'INDIAN_COCOS',
    /** Indian/Comoro */
    IndianComoro = 'INDIAN_COMORO',
    /** Indian/Kerguelen */
    IndianKerguelen = 'INDIAN_KERGUELEN',
    /** Indian/Mahe */
    IndianMahe = 'INDIAN_MAHE',
    /** Indian/Maldives */
    IndianMaldives = 'INDIAN_MALDIVES',
    /** Indian/Mauritius */
    IndianMauritius = 'INDIAN_MAURITIUS',
    /** Indian/Mayotte */
    IndianMayotte = 'INDIAN_MAYOTTE',
    /** Indian/Reunion */
    IndianReunion = 'INDIAN_REUNION',
    /** Pacific/Apia */
    PacificApia = 'PACIFIC_APIA',
    /** Pacific/Auckland */
    PacificAuckland = 'PACIFIC_AUCKLAND',
    /** Pacific/Bougainville */
    PacificBougainville = 'PACIFIC_BOUGAINVILLE',
    /** Pacific/Chatham */
    PacificChatham = 'PACIFIC_CHATHAM',
    /** Pacific/Chuuk */
    PacificChuuk = 'PACIFIC_CHUUK',
    /** Pacific/Easter */
    PacificEaster = 'PACIFIC_EASTER',
    /** Pacific/Efate */
    PacificEfate = 'PACIFIC_EFATE',
    /** Pacific/Enderbury */
    PacificEnderbury = 'PACIFIC_ENDERBURY',
    /** Pacific/Fakaofo */
    PacificFakaofo = 'PACIFIC_FAKAOFO',
    /** Pacific/Fiji */
    PacificFiji = 'PACIFIC_FIJI',
    /** Pacific/Funafuti */
    PacificFunafuti = 'PACIFIC_FUNAFUTI',
    /** Pacific/Galapagos */
    PacificGalapagos = 'PACIFIC_GALAPAGOS',
    /** Pacific/Gambier */
    PacificGambier = 'PACIFIC_GAMBIER',
    /** Pacific/Guadalcanal */
    PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
    /** Pacific/Guam */
    PacificGuam = 'PACIFIC_GUAM',
    /** Pacific/Honolulu */
    PacificHonolulu = 'PACIFIC_HONOLULU',
    /** Pacific/Kiritimati */
    PacificKiritimati = 'PACIFIC_KIRITIMATI',
    /** Pacific/Kosrae */
    PacificKosrae = 'PACIFIC_KOSRAE',
    /** Pacific/Kwajalein */
    PacificKwajalein = 'PACIFIC_KWAJALEIN',
    /** Pacific/Majuro */
    PacificMajuro = 'PACIFIC_MAJURO',
    /** Pacific/Marquesas */
    PacificMarquesas = 'PACIFIC_MARQUESAS',
    /** Pacific/Midway */
    PacificMidway = 'PACIFIC_MIDWAY',
    /** Pacific/Nauru */
    PacificNauru = 'PACIFIC_NAURU',
    /** Pacific/Niue */
    PacificNiue = 'PACIFIC_NIUE',
    /** Pacific/Norfolk */
    PacificNorfolk = 'PACIFIC_NORFOLK',
    /** Pacific/Noumea */
    PacificNoumea = 'PACIFIC_NOUMEA',
    /** Pacific/Pago_Pago */
    PacificPagoPago = 'PACIFIC_PAGO_PAGO',
    /** Pacific/Palau */
    PacificPalau = 'PACIFIC_PALAU',
    /** Pacific/Pitcairn */
    PacificPitcairn = 'PACIFIC_PITCAIRN',
    /** Pacific/Pohnpei */
    PacificPohnpei = 'PACIFIC_POHNPEI',
    /** Pacific/Port_Moresby */
    PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
    /** Pacific/Rarotonga */
    PacificRarotonga = 'PACIFIC_RAROTONGA',
    /** Pacific/Saipan */
    PacificSaipan = 'PACIFIC_SAIPAN',
    /** Pacific/Tahiti */
    PacificTahiti = 'PACIFIC_TAHITI',
    /** Pacific/Tarawa */
    PacificTarawa = 'PACIFIC_TARAWA',
    /** Pacific/Tongatapu */
    PacificTongatapu = 'PACIFIC_TONGATAPU',
    /** Pacific/Wake */
    PacificWake = 'PACIFIC_WAKE',
    /** Pacific/Wallis */
    PacificWallis = 'PACIFIC_WALLIS',
    /** US/Alaska */
    UsAlaska = 'US_ALASKA',
    /** US/Arizona */
    UsArizona = 'US_ARIZONA',
    /** US/Central */
    UsCentral = 'US_CENTRAL',
    /** US/Eastern */
    UsEastern = 'US_EASTERN',
    /** US/Hawaii */
    UsHawaii = 'US_HAWAII',
    /** US/Mountain */
    UsMountain = 'US_MOUNTAIN',
    /** US/Pacific */
    UsPacific = 'US_PACIFIC',
    /** UTC */
    Utc = 'UTC',
}

/** The Announcement model */
export type AnnouncementType = Node & {
    __typename?: 'AnnouncementType';
    actionLink?: Maybe<Scalars['String']>;
    actionText?: Maybe<Scalars['String']>;
    /** Set Announcement Type to the audience */
    announcementType: Scalars['String'];
    /** Details of the announcement. This would appear as the email body */
    body?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    event?: Maybe<MeetingType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    image?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    /** This would appear as a Push Notification/ SMS */
    sms?: Maybe<Scalars['String']>;
    /** What this announcement is about, it would appear as the email subject also */
    title: Scalars['String'];
    updated: Scalars['DateTime'];
};

export type AnnouncementTypeConnection = {
    __typename?: 'AnnouncementTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AnnouncementTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `AnnouncementType` and its cursor. */
export type AnnouncementTypeEdge = {
    __typename?: 'AnnouncementTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AnnouncementType>;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
    __typename?: 'ArchiveAccount';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** The Attendance object */
export type AttendanceType = Node & {
    __typename?: 'AttendanceType';
    approvedBy?: Maybe<UserType>;
    created: Scalars['DateTime'];
    excuse?: Maybe<Scalars['String']>;
    excuseApproved?: Maybe<Scalars['Boolean']>;
    excuseTime?: Maybe<Scalars['DateTime']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    interested: Scalars['Boolean'];
    meeting?: Maybe<MeetingType>;
    org?: Maybe<OrganizationType>;
    present: Scalars['Boolean'];
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
};

export type AttendanceTypeConnection = {
    __typename?: 'AttendanceTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AttendanceTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `AttendanceType` and its cursor. */
export type AttendanceTypeEdge = {
    __typename?: 'AttendanceTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AttendanceType>;
};

/** Take attendance of a user for an event */
export type CheckInMemberForEvent = {
    __typename?: 'CheckInMemberForEvent';
    attendance?: Maybe<AttendanceType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Undo the attendance taken for a user for an event */
export type CheckOutMemberForEvent = {
    __typename?: 'CheckOutMemberForEvent';
    attendance?: Maybe<AttendanceType>;
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * Checks if email belongs to
 * a member or already registered
 */
export type ConferenceRegistrationEmailCheckMutation = {
    __typename?: 'ConferenceRegistrationEmailCheckMutation';
    conferenceDetails?: Maybe<ConferenceRegistrationType>;
    hasPaid?: Maybe<Scalars['Boolean']>;
    message?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type ConferenceRegistrationMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    /** e.g. +2348012345678 */
    phone?: InputMaybe<Scalars['String']>;
    ticket?: InputMaybe<Scalars['String']>;
    user?: InputMaybe<Scalars['String']>;
};

/**
 * Registers both member or non_member for conference/event
 * and indicate the ticket type they're registering with
 */
export type ConferenceRegistrationMutationPayload = {
    __typename?: 'ConferenceRegistrationMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    event?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    lastName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    /** e.g. +2348012345678 */
    phone?: Maybe<Scalars['String']>;
    ticket?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
};

/** The Conference Registration Model Object */
export type ConferenceRegistrationType = Node & {
    __typename?: 'ConferenceRegistrationType';
    email?: Maybe<Scalars['String']>;
    event?: Maybe<MeetingType>;
    firstName?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    lastName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    /** e.g. +2348012345678 */
    phone?: Maybe<Scalars['String']>;
    pk?: Maybe<Scalars['ID']>;
    ticket?: Maybe<TicketType>;
    user?: Maybe<UserType>;
};

export type ConferenceRegistrationTypeConnection = {
    __typename?: 'ConferenceRegistrationTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ConferenceRegistrationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `ConferenceRegistrationType` and its cursor. */
export type ConferenceRegistrationTypeEdge = {
    __typename?: 'ConferenceRegistrationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ConferenceRegistrationType>;
};

/** For Offline: create payments record with proof of payments and necessary data */
export type ConfirmConferenceOfflinePaymentMutation = {
    __typename?: 'ConfirmConferenceOfflinePaymentMutation';
    error?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** For Online: create payments record with proof of payments and necessary data */
export type ConfirmConferenceOnlinePaymentMutation = {
    __typename?: 'ConfirmConferenceOnlinePaymentMutation';
    error?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Create offline payment record with proof of payments and necessary data */
export type ConfirmMembershipOfflinePaymentMutation = {
    __typename?: 'ConfirmMembershipOfflinePaymentMutation';
    error?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Create online payment record with proof of payments and necessary data */
export type ConfirmMembershipOnlinePaymentMutation = {
    __typename?: 'ConfirmMembershipOnlinePaymentMutation';
    error?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Sends an email to all org admins in the organization */
export type ContactOrganizationAdminsMutation = {
    __typename?: 'ContactOrganizationAdminsMutation';
    error?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Register your interest to attend an event */
export type CreateInterest = {
    __typename?: 'CreateInterest';
    attendance?: Maybe<AttendanceType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Create a schedule for an event */
export type CreateSchedule = {
    __typename?: 'CreateSchedule';
    schedule?: Maybe<ScheduleType>;
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
    __typename?: 'DeleteAccount';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    success?: Maybe<Scalars['Boolean']>;
};

/**  Discipline model type definition  */
export type DepartmentModelType = Node & {
    __typename?: 'DepartmentModelType';
    created: Scalars['DateTime'];
    deptAcad: AcademicRecordModelTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    name: Scalars['String'];
    pk: Scalars['ID'];
    school: SchoolModelType;
    updated: Scalars['DateTime'];
};

/**  Discipline model type definition  */
export type DepartmentModelTypeDeptAcadArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type DepartmentModelTypeConnection = {
    __typename?: 'DepartmentModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<DepartmentModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `DepartmentModelType` and its cursor. */
export type DepartmentModelTypeEdge = {
    __typename?: 'DepartmentModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<DepartmentModelType>;
};

/** Debugging information for the current query. */
export type DjangoDebug = {
    __typename?: 'DjangoDebug';
    /** Executed SQL queries for this API query. */
    sql?: Maybe<Array<Maybe<DjangoDebugSql>>>;
};

/** Represents a single database query made to a Django managed DB. */
export type DjangoDebugSql = {
    __typename?: 'DjangoDebugSQL';
    /** The Django database alias (e.g. 'default'). */
    alias: Scalars['String'];
    /** Duration of this database query in seconds. */
    duration: Scalars['Float'];
    /** Postgres connection encoding if available. */
    encoding?: Maybe<Scalars['String']>;
    /** Whether this database query was a SELECT. */
    isSelect: Scalars['Boolean'];
    /** Whether this database query took more than 10 seconds. */
    isSlow: Scalars['Boolean'];
    /** Postgres isolation level if available. */
    isoLevel?: Maybe<Scalars['String']>;
    /** JSON encoded database query parameters. */
    params: Scalars['String'];
    /** The raw SQL of this query, without params. */
    rawSql: Scalars['String'];
    /** The actual SQL sent to this database. */
    sql?: Maybe<Scalars['String']>;
    /** Start time of this database query. */
    startTime: Scalars['Float'];
    /** Stop time of this database query. */
    stopTime: Scalars['Float'];
    /** Postgres transaction ID if available. */
    transId?: Maybe<Scalars['String']>;
    /** Postgres transaction status if available. */
    transStatus?: Maybe<Scalars['String']>;
    /** The type of database being used (e.g. postrgesql, mysql, sqlite). */
    vendor: Scalars['String'];
};

/** Download Certificate of an event, based on pre-selected conditions */
export type DownloadCertificateMutation = {
    __typename?: 'DownloadCertificateMutation';
    certificate?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * Prepares and responds with an invitation letter for a member.
 * :arguments - Full name, Address Line 1 and Address Line 2
 */
export type DownloadInvitationLetterMutation = {
    __typename?: 'DownloadInvitationLetterMutation';
    invitationLetter?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type ErrorType = {
    __typename?: 'ErrorType';
    field: Scalars['String'];
    messages: Array<Scalars['String']>;
};

export type EventCheckInType = {
    __typename?: 'EventCheckInType';
    attendance?: Maybe<AttendanceType>;
    user?: Maybe<UserType>;
};

/** An Executive Model Object */
export type ExecutiveType = Node & {
    __typename?: 'ExecutiveType';
    bio?: Maybe<Scalars['String']>;
    category?: Maybe<LeadershipCategoryType>;
    /** this person currently holds this position */
    current: Scalars['Boolean'];
    email?: Maybe<Scalars['String']>;
    endTenure?: Maybe<Scalars['Date']>;
    /** Enter facebook username */
    facebook?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    photo?: Maybe<Scalars['String']>;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    position?: Maybe<LeadershipPositionType>;
    startTenure?: Maybe<Scalars['Date']>;
    /** Enter twitter username */
    twitter?: Maybe<Scalars['String']>;
    uuid: Scalars['UUID'];
};

export type ExecutiveTypeConnection = {
    __typename?: 'ExecutiveTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ExecutiveTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `ExecutiveType` and its cursor. */
export type ExecutiveTypeEdge = {
    __typename?: 'ExecutiveTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ExecutiveType>;
};

/** The Event Feedback Object */
export type FeedbackType = Node & {
    __typename?: 'FeedbackType';
    /** The ID of the object. */
    id: Scalars['ID'];
    keyTakeaway?: Maybe<Scalars['String']>;
    lectureDelivery?: Maybe<Scalars['String']>;
    likedLeast?: Maybe<Scalars['String']>;
    likedMost?: Maybe<Scalars['String']>;
    meeting?: Maybe<MeetingType>;
    otherComments?: Maybe<Scalars['String']>;
    participantsEngagement?: Maybe<Scalars['String']>;
    respondent?: Maybe<UserType>;
};

export type FeedbackTypeConnection = {
    __typename?: 'FeedbackTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<FeedbackTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `FeedbackType` and its cursor. */
export type FeedbackTypeEdge = {
    __typename?: 'FeedbackTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<FeedbackType>;
};

/**
 * Verify a Google Sign in on the app
 *
 */
export type GoogleSignIn = {
    __typename?: 'GoogleSignIn';
    ok?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

/** The How Did You Hear About Us Object */
export type HowDidYouHearAboutUsType = Node & {
    __typename?: 'HowDidYouHearAboutUsType';
    /** The ID of the object. */
    id: Scalars['ID'];
    meeting?: Maybe<MeetingType>;
    organization?: Maybe<OrganizationType>;
    respondent?: Maybe<UserType>;
    response?: Maybe<Scalars['String']>;
};

export type HowDidYouHearAboutUsTypeConnection = {
    __typename?: 'HowDidYouHearAboutUsTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<HowDidYouHearAboutUsTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `HowDidYouHearAboutUsType` and its cursor. */
export type HowDidYouHearAboutUsTypeEdge = {
    __typename?: 'HowDidYouHearAboutUsTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<HowDidYouHearAboutUsType>;
};

export type JoinOrganizationMutationInput = {
    /** The Admin that approved - if joining with Organization is not automatic */
    admin?: InputMaybe<Scalars['String']>;
    /** Amount owed to the organization */
    amountOwing?: InputMaybe<Scalars['Float']>;
    amountOwingReason?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    blocked?: InputMaybe<Scalars['Boolean']>;
    /** The Admin that blocked the person */
    blockedBy?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    contactMessage?: InputMaybe<Scalars['String']>;
    corenNumber?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    membershipApplicationCompleted?: InputMaybe<Scalars['Boolean']>;
    membershipCadre?: InputMaybe<Scalars['String']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    nseNumber?: InputMaybe<Scalars['String']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    otherSpecialty?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    refereeOneName?: InputMaybe<Scalars['String']>;
    refereeOneNumber?: InputMaybe<Scalars['String']>;
    refereeThreeName?: InputMaybe<Scalars['String']>;
    refereeThreeNumber?: InputMaybe<Scalars['String']>;
    refereeTwoName?: InputMaybe<Scalars['String']>;
    refereeTwoNumber?: InputMaybe<Scalars['String']>;
    rejectionReason?: InputMaybe<Scalars['String']>;
    specialty?: InputMaybe<Scalars['String']>;
    subSpecialty?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
    /** The User that wants to join the organization */
    user: Scalars['String'];
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** Allow a user join an organization and submit the necessary information */
export type JoinOrganizationMutationPayload = {
    __typename?: 'JoinOrganizationMutationPayload';
    /** The Admin that approved - if joining with Organization is not automatic */
    admin?: Maybe<Scalars['String']>;
    /** Amount owed to the organization */
    amountOwing?: Maybe<Scalars['Float']>;
    amountOwingCurrency?: Maybe<Scalars['String']>;
    amountOwingReason?: Maybe<Scalars['String']>;
    approved?: Maybe<Scalars['Boolean']>;
    blocked?: Maybe<Scalars['Boolean']>;
    /** The Admin that blocked the person */
    blockedBy?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    contactMessage?: Maybe<Scalars['String']>;
    corenNumber?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    membershipApplicationCompleted?: Maybe<Scalars['Boolean']>;
    membershipCadre?: Maybe<Scalars['String']>;
    newOrOld?: Maybe<Scalars['String']>;
    nseNumber?: Maybe<Scalars['String']>;
    orgNumber?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    otherSpecialty?: Maybe<Scalars['String']>;
    paymentName?: Maybe<Scalars['String']>;
    refereeOneName?: Maybe<Scalars['String']>;
    refereeOneNumber?: Maybe<Scalars['String']>;
    refereeThreeName?: Maybe<Scalars['String']>;
    refereeThreeNumber?: Maybe<Scalars['String']>;
    refereeTwoName?: Maybe<Scalars['String']>;
    refereeTwoNumber?: Maybe<Scalars['String']>;
    rejectionReason?: Maybe<Scalars['String']>;
    specialty?: Maybe<Scalars['String']>;
    subSpecialty?: Maybe<Scalars['String']>;
    subdivision?: Maybe<Scalars['String']>;
    /** The User that wants to join the organization */
    user?: Maybe<Scalars['String']>;
    verified?: Maybe<Scalars['Boolean']>;
};

export type JoinRequestType = Node & {
    __typename?: 'JoinRequestType';
    /** Amount owed to the organization */
    amountOwing?: Maybe<Scalars['Decimal']>;
    amountOwingCurrency: Scalars['String'];
    amountOwingReason?: Maybe<Scalars['String']>;
    amountOwingStr?: Maybe<Scalars['String']>;
    amountOwingValue?: Maybe<Scalars['Int']>;
    approved?: Maybe<Scalars['Boolean']>;
    contactMessage?: Maybe<Scalars['String']>;
    corenNumber?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    membershipApplicationCompleted?: Maybe<Scalars['Boolean']>;
    membershipCadre?: Maybe<OrgMembershipType>;
    newOrOld?: Maybe<Scalars['String']>;
    nseNumber?: Maybe<Scalars['String']>;
    orgNumber?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    otherSpecialty?: Maybe<Scalars['String']>;
    paymentName?: Maybe<Scalars['String']>;
    pk?: Maybe<Scalars['ID']>;
    refereeOneName?: Maybe<Scalars['String']>;
    refereeOneNumber?: Maybe<Scalars['String']>;
    refereeThreeName?: Maybe<Scalars['String']>;
    refereeThreeNumber?: Maybe<Scalars['String']>;
    refereeTwoName?: Maybe<Scalars['String']>;
    refereeTwoNumber?: Maybe<Scalars['String']>;
    rejectionReason?: Maybe<Scalars['String']>;
    specialty?: Maybe<SpecialtyType>;
    subSpecialty?: Maybe<SubSpecialtyType>;
    subdivision?: Maybe<OrgSubDivisionType>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
    uuid: Scalars['UUID'];
    verified?: Maybe<Scalars['Boolean']>;
};

export type JoinRequestTypeConnection = {
    __typename?: 'JoinRequestTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<JoinRequestTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `JoinRequestType` and its cursor. */
export type JoinRequestTypeEdge = {
    __typename?: 'JoinRequestTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<JoinRequestType>;
};

/** An LeadershipCategory Model Object */
export type LeadershipCategoryType = Node & {
    __typename?: 'LeadershipCategoryType';
    description?: Maybe<Scalars['String']>;
    executiveSet: ExecutiveTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    name: Scalars['String'];
    org?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
};

/** An LeadershipCategory Model Object */
export type LeadershipCategoryTypeExecutiveSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    current?: InputMaybe<Scalars['Boolean']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    position_Id?: InputMaybe<Scalars['Float']>;
    startTenure?: InputMaybe<Scalars['Date']>;
};

export type LeadershipCategoryTypeConnection = {
    __typename?: 'LeadershipCategoryTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<LeadershipCategoryTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `LeadershipCategoryType` and its cursor. */
export type LeadershipCategoryTypeEdge = {
    __typename?: 'LeadershipCategoryTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<LeadershipCategoryType>;
};

/** An LeadershipPosition Model Object */
export type LeadershipPositionType = Node & {
    __typename?: 'LeadershipPositionType';
    /** The ID of the object. */
    id: Scalars['ID'];
    job?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    position: Scalars['String'];
    positions: ExecutiveTypeConnection;
    /** This determines how it would displayed. If Chairman is 1, he will appear topmost, Vice is 2, like that... */
    rank: Scalars['Int'];
    slug?: Maybe<Scalars['String']>;
    tenure?: Maybe<Scalars['String']>;
};

/** An LeadershipPosition Model Object */
export type LeadershipPositionTypePositionsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    current?: InputMaybe<Scalars['Boolean']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    position_Id?: InputMaybe<Scalars['Float']>;
    startTenure?: InputMaybe<Scalars['Date']>;
};

export type LeadershipPositionTypeConnection = {
    __typename?: 'LeadershipPositionTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<LeadershipPositionTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `LeadershipPositionType` and its cursor. */
export type LeadershipPositionTypeEdge = {
    __typename?: 'LeadershipPositionTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<LeadershipPositionType>;
};

/**
 * Leave an Organization Mutation.
 * Authenticated user should be able to leave an org
 */
export type LeaveOrgMutation = {
    __typename?: 'LeaveOrgMutation';
    request?: Maybe<JoinRequestType>;
};

/** The MeetingCategory Model Object */
export type MeetingCategoryType = Node & {
    __typename?: 'MeetingCategoryType';
    description?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    meetingSet: MeetingTypeConnection;
    name: Scalars['String'];
    org?: Maybe<OrganizationType>;
    pk?: Maybe<Scalars['ID']>;
};

/** The MeetingCategory Model Object */
export type MeetingCategoryTypeMeetingSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
};

export type MeetingCategoryTypeConnection = {
    __typename?: 'MeetingCategoryTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<MeetingCategoryTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `MeetingCategoryType` and its cursor. */
export type MeetingCategoryTypeEdge = {
    __typename?: 'MeetingCategoryTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<MeetingCategoryType>;
};

/** The Meeting / events object */
export type MeetingType = Node & {
    __typename?: 'MeetingType';
    announcementSet: AnnouncementTypeConnection;
    attendance: Scalars['Boolean'];
    category?: Maybe<MeetingCategoryType>;
    /** A downloadable certificate related to this event. Must have fillable Form Fields in PDF */
    certificate?: Maybe<Scalars['String']>;
    /** A 6-digit Attendance code to be enter via the Mobile App at the meeting venue */
    code?: Maybe<Scalars['String']>;
    conferenceEvent: ConferenceRegistrationTypeConnection;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    /** Event objectives, sub-themes */
    description?: Maybe<Scalars['String']>;
    /** The domain name of the organization hosting this event */
    domainName?: Maybe<Scalars['String']>;
    /** Download Certification Condition I */
    downloadCertificateCondition1: Scalars['Boolean'];
    /** Download Certification Condition II */
    downloadCertificateCondition2: Scalars['Boolean'];
    endDate?: Maybe<Scalars['Date']>;
    endTime?: Maybe<Scalars['Time']>;
    /** Event logo */
    eventLogo?: Maybe<Scalars['String']>;
    eventLogoUrl?: Maybe<Scalars['String']>;
    /** Publishing an event makes it accessible for everyone to see/register */
    eventState: Scalars['String'];
    eventTicket: TicketTypeConnection;
    feedbackMeetings: FeedbackTypeConnection;
    /** Cover photo/ flyer of the event */
    flyer?: Maybe<Scalars['String']>;
    hearaboutusMeetings: HowDidYouHearAboutUsTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** Generic Invitation Letter for a Paid Event, Must have fillable Form Fields in PDF */
    invitationLetter?: Maybe<Scalars['String']>;
    /** This indicates if the event is specifically a conference */
    isConference?: Maybe<Scalars['Boolean']>;
    locationWebsite: WebsiteTypeConnection;
    mainEvent?: Maybe<MeetingType>;
    meetingSet: MeetingTypeConnection;
    meetingSponsor: SponsorTypeConnection;
    meetings: AttendanceTypeConnection;
    /** Minute of previous meeting to be read at this meeting */
    minutes?: Maybe<Scalars['String']>;
    minutesUrl?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    /** Youtube, Zoom, Google Meet, Facebook or any link for members to join the event */
    onlineMeetingLink?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    /** Should payment be collected during registration for this event */
    paid: Scalars['Boolean'];
    paperMeetings: PresentationTypeConnection;
    payers: PaymentTypeConnection;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    presenterMeetings: PresenterTypeConnection;
    publishAt?: Maybe<Scalars['DateTime']>;
    /** The Planning Committee to contact for attention */
    rsvp?: Maybe<Scalars['String']>;
    scheduleMeetings: ScheduleTypeConnection;
    session: Scalars['Boolean'];
    startDate: Scalars['Date'];
    startTime: Scalars['Time'];
    /** Subtitle of event */
    theme?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    url?: Maybe<Scalars['String']>;
    uuid: Scalars['UUID'];
    venue?: Maybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypeAnnouncementSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypeConferenceEventArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The Meeting / events object */
export type MeetingTypeEventTicketArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

/** The Meeting / events object */
export type MeetingTypeFeedbackMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The Meeting / events object */
export type MeetingTypeHearaboutusMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The Meeting / events object */
export type MeetingTypeLocationWebsiteArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    customDomain?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org?: InputMaybe<Scalars['ID']>;
    subDomain?: InputMaybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypeMeetingSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypeMeetingSponsorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Meeting / events object */
export type MeetingTypeMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    excuse?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    interested?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    present?: InputMaybe<Scalars['Boolean']>;
};

/** The Meeting / events object */
export type MeetingTypePaperMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypePayersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    ticket?: InputMaybe<Scalars['ID']>;
};

/** The Meeting / events object */
export type MeetingTypePresenterMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypeScheduleMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    location?: InputMaybe<Scalars['String']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type MeetingTypeConnection = {
    __typename?: 'MeetingTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<MeetingTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `MeetingType` and its cursor. */
export type MeetingTypeEdge = {
    __typename?: 'MeetingTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<MeetingType>;
};

export type MemberInvitationMutation = {
    __typename?: 'MemberInvitationMutation';
    memberInvitation?: Maybe<MemberInvitationType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** The Imported Members Invitation Object */
export type MemberInvitationType = Node & {
    __typename?: 'MemberInvitationType';
    created: Scalars['DateTime'];
    creator?: Maybe<UserType>;
    email?: Maybe<Scalars['String']>;
    firstName: Scalars['String'];
    /** The ID of the object. */
    id: Scalars['ID'];
    invited: Scalars['Boolean'];
    lastName: Scalars['String'];
    organization?: Maybe<OrganizationType>;
    phoneNumber?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    used: Scalars['Boolean'];
    uuid: Scalars['UUID'];
};

export type MemberInvitationTypeConnection = {
    __typename?: 'MemberInvitationTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<MemberInvitationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `MemberInvitationType` and its cursor. */
export type MemberInvitationTypeEdge = {
    __typename?: 'MemberInvitationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<MemberInvitationType>;
};

/** Sends an email informing the user that their membership application was successful */
export type MembershipApplicationSubmission = {
    __typename?: 'MembershipApplicationSubmission';
    success?: Maybe<Scalars['Boolean']>;
};

/** The Membership Payment Model Object */
export type MembershipPaymentType = Node & {
    __typename?: 'MembershipPaymentType';
    amountPaid?: Maybe<Scalars['Decimal']>;
    amountPaidCurrency: Scalars['String'];
    amountPaidStr?: Maybe<Scalars['String']>;
    amountPaidValue?: Maybe<Scalars['Int']>;
    created: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    membershipType?: Maybe<OrgMembershipType>;
    org?: Maybe<OrganizationType>;
    paid: Scalars['Boolean'];
    payerName?: Maybe<Scalars['String']>;
    paymentApproval?: Maybe<Scalars['Boolean']>;
    paymentDate?: Maybe<Scalars['Date']>;
    paymentName?: Maybe<Scalars['String']>;
    paymentStatus: Scalars['String'];
    paymentType: Scalars['String'];
    pk: Scalars['ID'];
    proofOfPayment?: Maybe<Scalars['String']>;
    refundStatus: Scalars['Boolean'];
    txref?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
    uuid: Scalars['UUID'];
};

export type MembershipPaymentTypeConnection = {
    __typename?: 'MembershipPaymentTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<MembershipPaymentTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `MembershipPaymentType` and its cursor. */
export type MembershipPaymentTypeEdge = {
    __typename?: 'MembershipPaymentTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<MembershipPaymentType>;
};

/** Delete an NextOfKin */
export type NextOfKinDeleteMutation = {
    __typename?: 'NextOfKinDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/**  NextOfKin model type definition  */
export type NextOfKinModelType = Node & {
    __typename?: 'NextOfKinModelType';
    email: Scalars['String'];
    firstName: Scalars['String'];
    /** The ID of the object. */
    id: Scalars['ID'];
    lastName: Scalars['String'];
    middleName: Scalars['String'];
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    relationship?: Maybe<Scalars['String']>;
    user: UserType;
};

export type NextOfKinModelTypeConnection = {
    __typename?: 'NextOfKinModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<NextOfKinModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `NextOfKinModelType` and its cursor. */
export type NextOfKinModelTypeEdge = {
    __typename?: 'NextOfKinModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<NextOfKinModelType>;
};

export type NextOfKinMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    /** Write in international phone no format (+234 or +41) */
    phone?: InputMaybe<Scalars['String']>;
    relationship?: InputMaybe<Scalars['String']>;
    user: Scalars['String'];
};

/** Create NextOfKin information */
export type NextOfKinMutationPayload = {
    __typename?: 'NextOfKinMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    firstName?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    lastName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    relationship?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
    /** The ID of the object. */
    id: Scalars['ID'];
};

/** Update the Notification settings of a User */
export type NotificationSettingsMutation = {
    __typename?: 'NotificationSettingsMutation';
    settings?: Maybe<UserSettingType>;
};

/** The Notification model */
export type NotificationType = {
    __typename?: 'NotificationType';
    createdAt: Scalars['DateTime'];
    email?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    push?: Maybe<Scalars['String']>;
    read: Scalars['Boolean'];
    sms?: Maybe<Scalars['String']>;
    subject?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
    user?: Maybe<UserType>;
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
    __typename?: 'ObtainJSONWebToken';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
    unarchiving?: Maybe<Scalars['Boolean']>;
    user?: Maybe<UserNode>;
};

export type OrgAdminInvitationMutation = {
    __typename?: 'OrgAdminInvitationMutation';
    orgAdminInvitation?: Maybe<OrgAdminInvitationType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** The Organization Admin Invitation Object */
export type OrgAdminInvitationType = Node & {
    __typename?: 'OrgAdminInvitationType';
    created: Scalars['DateTime'];
    creator?: Maybe<UserType>;
    email: Scalars['String'];
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    updated: Scalars['DateTime'];
    used: Scalars['Boolean'];
    uuid: Scalars['UUID'];
};

export type OrgAdminInvitationTypeConnection = {
    __typename?: 'OrgAdminInvitationTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrgAdminInvitationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `OrgAdminInvitationType` and its cursor. */
export type OrgAdminInvitationTypeEdge = {
    __typename?: 'OrgAdminInvitationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrgAdminInvitationType>;
};

/** The Organization Admin Object */
export type OrgAdminType = Node & {
    __typename?: 'OrgAdminType';
    created: Scalars['DateTime'];
    creator?: Maybe<UserType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
};

export type OrgAdminTypeConnection = {
    __typename?: 'OrgAdminTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrgAdminTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `OrgAdminType` and its cursor. */
export type OrgAdminTypeEdge = {
    __typename?: 'OrgAdminTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrgAdminType>;
};

/** The Organization's Membership Types/Categories Object */
export type OrgMembershipType = {
    __typename?: 'OrgMembershipType';
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    membershipFeeStr?: Maybe<Scalars['String']>;
    membershipFeeValue?: Maybe<Scalars['Int']>;
    membershipRenewalFeeStr?: Maybe<Scalars['String']>;
    membershipRenewalFeeValue?: Maybe<Scalars['Int']>;
    name: Scalars['String'];
    organization?: Maybe<OrganizationType>;
};

/** Delete an OrgSubDivision */
export type OrgSubDivisionDeleteMutation = {
    __typename?: 'OrgSubDivisionDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

export type OrgSubDivisionMutationInput = {
    chairperson?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    dateOfInauguration?: InputMaybe<Scalars['Date']>;
    email?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    meetingDaysTime?: InputMaybe<Scalars['String']>;
    meetingVenue?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    subdivision: Scalars['String'];
    type?: InputMaybe<Scalars['String']>;
};

/** Create OrgSubDivision information */
export type OrgSubDivisionMutationPayload = {
    __typename?: 'OrgSubDivisionMutationPayload';
    chairperson?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    dateOfInauguration?: Maybe<Scalars['Date']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    meetingDaysTime?: Maybe<Scalars['String']>;
    meetingVenue?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    subdivision?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    updated?: Maybe<Scalars['DateTime']>;
};

/** The OrgSubDivision Model Object */
export type OrgSubDivisionType = Node & {
    __typename?: 'OrgSubDivisionType';
    chairperson?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    dateOfInauguration?: Maybe<Scalars['Date']>;
    email?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    joinrequestSet: JoinRequestTypeConnection;
    meetingDaysTime?: Maybe<Scalars['String']>;
    meetingVenue?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    phoneNumber?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    state?: Maybe<Scalars['String']>;
    subdivision: Scalars['String'];
    type?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
};

/** The OrgSubDivision Model Object */
export type OrgSubDivisionTypeJoinrequestSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrgSubDivisionTypeConnection = {
    __typename?: 'OrgSubDivisionTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrgSubDivisionTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `OrgSubDivisionType` and its cursor. */
export type OrgSubDivisionTypeEdge = {
    __typename?: 'OrgSubDivisionTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrgSubDivisionType>;
};

/** An Organization Payment API Model Object */
export type OrganizationPaymentApiType = Node & {
    __typename?: 'OrganizationPaymentAPIType';
    /** The ID of the object. */
    id: Scalars['ID'];
    livePublicKey?: Maybe<Scalars['String']>;
    liveSecretKey?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    platform?: Maybe<Scalars['String']>;
    testPublicKey?: Maybe<Scalars['String']>;
    testSecretKey?: Maybe<Scalars['String']>;
};

export type OrganizationPaymentApiTypeConnection = {
    __typename?: 'OrganizationPaymentAPITypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrganizationPaymentApiTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `OrganizationPaymentAPIType` and its cursor. */
export type OrganizationPaymentApiTypeEdge = {
    __typename?: 'OrganizationPaymentAPITypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrganizationPaymentApiType>;
};

export type OrganizationType = Node & {
    __typename?: 'OrganizationType';
    /** Popular name you are called in a short form */
    abbrev: Scalars['String'];
    /** Data about the Organization: Vision, Mission, etc */
    about?: Maybe<Scalars['String']>;
    /** The Membership renewal rate in naira */
    amount?: Maybe<Scalars['Decimal']>;
    announcements: AnnouncementTypeConnection;
    /** Takes Attendance of people at meetings */
    attendance?: Maybe<Scalars['Boolean']>;
    attendees: AttendanceTypeConnection;
    bankAccount?: Maybe<Scalars['String']>;
    bankName?: Maybe<Scalars['String']>;
    /** Bank sort code is for international transfer */
    bankSortCode?: Maybe<Scalars['String']>;
    bannerSliderImages: WebsiteBannerSliderImageTypeConnection;
    conferencepaymentSet: PaymentTypeConnection;
    conferenceregistrationSet: ConferenceRegistrationTypeConnection;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    email?: Maybe<Scalars['String']>;
    events: MeetingTypeConnection;
    executiveSet: ExecutiveTypeConnection;
    facebook?: Maybe<Scalars['String']>;
    faqs: WebsiteFaqTypeConnection;
    flutterwaveSubaccountId?: Maybe<Scalars['String']>;
    hearaboutusOrganization: HowDidYouHearAboutUsTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** Members automatically join when they request to join */
    join?: Maybe<Scalars['Boolean']>;
    leadershipcategorySet: LeadershipCategoryTypeConnection;
    leadershippositionSet: LeadershipPositionTypeConnection;
    linkedin?: Maybe<Scalars['String']>;
    meetingcategorySet: MeetingCategoryTypeConnection;
    /** Keeps minutes of meetings during meetings */
    minutes?: Maybe<Scalars['Boolean']>;
    /** Has recurring monthly meetings (e.g. OGM) */
    monthly?: Maybe<Scalars['Boolean']>;
    myOrg: JoinRequestTypeConnection;
    name: Scalars['String'];
    officeAddress?: Maybe<Scalars['String']>;
    org: MemberInvitationTypeConnection;
    orgMembershippayments: MembershipPaymentTypeConnection;
    orgMembershiptypes: Array<OrgMembershipType>;
    orgadminSet: OrgAdminTypeConnection;
    orgadmininvitationSet: OrgAdminInvitationTypeConnection;
    organizationpaymentapikeysSet: OrganizationPaymentApiTypeConnection;
    orgsubdivisionSet: OrgSubDivisionTypeConnection;
    phone?: Maybe<Scalars['String']>;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    presentationSet: PresentationTypeConnection;
    presenters: PresenterTypeConnection;
    publicationcategorySet: PublicationCategoryTypeConnection;
    publications: PublicationTypeConnection;
    /** Mother Organization */
    selfie: OrganizationTypeConnection;
    /** You can use your domain name here without the TLD */
    slug: Scalars['String'];
    specialtySet: SpecialtyTypeConnection;
    sponsorSet: SponsorTypeConnection;
    storeWebsite: WebsiteTypeConnection;
    subspecialtySet: SubSpecialtyTypeConnection;
    /** Mother Organization */
    superbody?: Maybe<OrganizationType>;
    telegram?: Maybe<Scalars['Int']>;
    ticketSet: TicketTypeConnection;
    timezone: Scalars['String'];
    twitter?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    uuid: Scalars['UUID'];
    /** Uncheck if creating a super body with child organizations underneath */
    visible?: Maybe<Scalars['Boolean']>;
    /** Has recurring annual meetings (e.g. AGM) */
    yearly?: Maybe<Scalars['Boolean']>;
};

export type OrganizationTypeAnnouncementsArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeAttendeesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    excuse?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    interested?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    present?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationTypeBannerSliderImagesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeConferencepaymentSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    ticket?: InputMaybe<Scalars['ID']>;
};

export type OrganizationTypeConferenceregistrationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeEventsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeExecutiveSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    current?: InputMaybe<Scalars['Boolean']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    position_Id?: InputMaybe<Scalars['Float']>;
    startTenure?: InputMaybe<Scalars['Date']>;
};

export type OrganizationTypeFaqsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    createdBy_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeHearaboutusOrganizationArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

export type OrganizationTypeLeadershipcategorySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeLeadershippositionSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    position?: InputMaybe<Scalars['String']>;
    rank?: InputMaybe<Scalars['Int']>;
};

export type OrganizationTypeMeetingcategorySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeMyOrgArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationTypeOrgArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    used?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationTypeOrgMembershippaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    membershipType?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeOrgadminSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

export type OrganizationTypeOrgadmininvitationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
};

export type OrganizationTypeOrganizationpaymentapikeysSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    platform?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeOrgsubdivisionSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    chairperson?: InputMaybe<Scalars['String']>;
    dateOfInauguration?: InputMaybe<Scalars['Date']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meetingDaysTime?: InputMaybe<Scalars['String']>;
    meetingVenue?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypePresentationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypePresentersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypePublicationcategorySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypePublicationsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeSelfieArgs = {
    abbrev?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    myOrg_Approved?: InputMaybe<Scalars['Boolean']>;
    myOrg_Blocked?: InputMaybe<Scalars['Boolean']>;
    myOrg_User?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeSpecialtySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeSponsorSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type OrganizationTypeStoreWebsiteArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    customDomain?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org?: InputMaybe<Scalars['ID']>;
    subDomain?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeSubspecialtySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    specialty_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeTicketSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeConnection = {
    __typename?: 'OrganizationTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrganizationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `OrganizationType` and its cursor. */
export type OrganizationTypeEdge = {
    __typename?: 'OrganizationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrganizationType>;
};

export type PageDataListType = {
    __typename?: 'PageDataListType';
    conferencePageData?: Maybe<PageDataType>;
};

export type PageDataType = {
    __typename?: 'PageDataType';
    event?: Maybe<MeetingType>;
    organization?: Maybe<OrganizationType>;
    presentations?: Maybe<Array<Maybe<PresentationType>>>;
    presenters?: Maybe<Array<Maybe<PresenterType>>>;
    schedules?: Maybe<Array<Maybe<ScheduleType>>>;
    sponsors?: Maybe<Array<Maybe<SponsorType>>>;
    tickets?: Maybe<Array<Maybe<TicketType>>>;
    website?: Maybe<WebsiteType>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']>;
};

export type PaidEventRegistration = {
    __typename?: 'PaidEventRegistration';
    error?: Maybe<Scalars['String']>;
    payment?: Maybe<PaymentType>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User may not be verified.
 */
export type PasswordChangeWithoutVerification = {
    __typename?: 'PasswordChangeWithoutVerification';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

export type PasswordReset = {
    __typename?: 'PasswordReset';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** The Payment Model Object */
export type PaymentType = Node & {
    __typename?: 'PaymentType';
    amountPaid?: Maybe<Scalars['Decimal']>;
    amountPaidCurrency: Scalars['String'];
    created: Scalars['DateTime'];
    email?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    lastName?: Maybe<Scalars['String']>;
    meeting?: Maybe<MeetingType>;
    org?: Maybe<OrganizationType>;
    paid: Scalars['Boolean'];
    payerName?: Maybe<Scalars['String']>;
    paymentApproval?: Maybe<Scalars['Boolean']>;
    paymentDate?: Maybe<Scalars['Date']>;
    paymentName?: Maybe<Scalars['String']>;
    paymentType: Scalars['String'];
    proofOfPayment?: Maybe<Scalars['String']>;
    refundStatus: Scalars['Boolean'];
    ticket?: Maybe<TicketType>;
    txref?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
    uuid: Scalars['UUID'];
};

export type PaymentTypeConnection = {
    __typename?: 'PaymentTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PaymentTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `PaymentType` and its cursor. */
export type PaymentTypeEdge = {
    __typename?: 'PaymentTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PaymentType>;
};

export type PotentialClientMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    fullname: Scalars['String'];
    organization: Scalars['String'];
    phonenumber: Scalars['String'];
};

/** Create a Potential Client */
export type PotentialClientMutationPayload = {
    __typename?: 'PotentialClientMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    fullname?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    phonenumber?: Maybe<Scalars['String']>;
};

export type PotentialClientType = {
    __typename?: 'PotentialClientType';
    email: Scalars['String'];
    fullname: Scalars['String'];
    id: Scalars['ID'];
    organization: Scalars['String'];
    phonenumber: Scalars['String'];
};

/** The Presentation object */
export type PresentationType = Node & {
    __typename?: 'PresentationType';
    abstract: Scalars['String'];
    /** If the author is a member, select author from the list */
    author: PresenterTypeConnection;
    created: Scalars['DateTime'];
    /** If presentation document is uploaded on another service, paste link here so that members can download it */
    externalUpload?: Maybe<Scalars['String']>;
    /** Upload PDF or Power point presentation document */
    file: Scalars['String'];
    fileUrl?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    meeting?: Maybe<MeetingType>;
    org?: Maybe<OrganizationType>;
    slug?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    updated: Scalars['DateTime'];
    /** This is the count of the number of views/ downloads of this document */
    view: Scalars['Int'];
};

/** The Presentation object */
export type PresentationTypeAuthorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type PresentationTypeConnection = {
    __typename?: 'PresentationTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PresentationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `PresentationType` and its cursor. */
export type PresentationTypeEdge = {
    __typename?: 'PresentationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PresentationType>;
};

/** The Presenter object */
export type PresenterType = Node & {
    __typename?: 'PresenterType';
    bio?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    meeting?: Maybe<MeetingType>;
    /** If the author is not a member */
    name?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    person?: Maybe<UserType>;
    photoUrl?: Maybe<Scalars['String']>;
    picture?: Maybe<Scalars['String']>;
    /** The Presenter's skills,                             qualifications, education, */
    portfolio?: Maybe<Scalars['String']>;
    /** If the author is a member, select author from the list */
    presentationSet: PresentationTypeConnection;
    slug?: Maybe<Scalars['String']>;
    speaker: ScheduleTypeConnection;
    updated: Scalars['DateTime'];
};

/** The Presenter object */
export type PresenterTypePresentationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The Presenter object */
export type PresenterTypeSpeakerArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    location?: InputMaybe<Scalars['String']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type PresenterTypeConnection = {
    __typename?: 'PresenterTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PresenterTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `PresenterType` and its cursor. */
export type PresenterTypeEdge = {
    __typename?: 'PresenterTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PresenterType>;
};

/** The PublicationCategory Model Object */
export type PublicationCategoryType = Node & {
    __typename?: 'PublicationCategoryType';
    description?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    name: Scalars['String'];
    org?: Maybe<OrganizationType>;
    publicationSet: PublicationTypeConnection;
};

/** The PublicationCategory Model Object */
export type PublicationCategoryTypePublicationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type PublicationCategoryTypeConnection = {
    __typename?: 'PublicationCategoryTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PublicationCategoryTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `PublicationCategoryType` and its cursor. */
export type PublicationCategoryTypeEdge = {
    __typename?: 'PublicationCategoryTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PublicationCategoryType>;
};

/** The Publication object */
export type PublicationType = Node & {
    __typename?: 'PublicationType';
    abstract: Scalars['String'];
    /** How much to pay if it is a paid download */
    amountPayable?: Maybe<Scalars['Decimal']>;
    amountPayableCurrency: Scalars['String'];
    category?: Maybe<PublicationCategoryType>;
    created: Scalars['DateTime'];
    /** If presentation document is uploaded on another service, paste link here so that members can download it */
    externalUpload?: Maybe<Scalars['String']>;
    /** Upload PDF or Power point presentation document */
    file: Scalars['String'];
    fileUrl?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    org?: Maybe<OrganizationType>;
    paidDownload: Scalars['Boolean'];
    pk: Scalars['ID'];
    slug?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    updated: Scalars['DateTime'];
    /** This is the count of the number of views/ downloads of this document */
    view: Scalars['Int'];
};

export type PublicationTypeConnection = {
    __typename?: 'PublicationTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PublicationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `PublicationType` and its cursor. */
export type PublicationTypeEdge = {
    __typename?: 'PublicationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PublicationType>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
    __typename?: 'RefreshToken';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    payload?: Maybe<Scalars['GenericScalar']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

export type RegisterUser = {
    __typename?: 'RegisterUser';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

export type RegisterUserByOrganization = {
    __typename?: 'RegisterUserByOrganization';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

export type ResendActivationEmail = {
    __typename?: 'ResendActivationEmail';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
    __typename?: 'RevokeToken';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    revoked?: Maybe<Scalars['Int']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type RootMutation = {
    __typename?: 'RootMutation';
    /** Delete an AcademicRecord */
    academicRecordDelete?: Maybe<AcademicRecordDeleteMutation>;
    /**
     * Archive account and revoke refresh tokens.
     *
     * User must be verified and confirm password.
     */
    archiveAccount?: Maybe<ArchiveAccount>;
    /** Take attendance of a logged in user for an event */
    attendance?: Maybe<TakeAttendance>;
    /** Take attendance of a user for an event */
    checkInMember?: Maybe<CheckInMemberForEvent>;
    /** Undo the attendance taken for a user for an event */
    checkOutMember?: Maybe<CheckOutMemberForEvent>;
    /**
     * Checks if email belongs to
     * a member or already registered
     */
    checkRegistrationEmail?: Maybe<ConferenceRegistrationEmailCheckMutation>;
    /**
     * Registers both member or non_member for conference/event
     * and indicate the ticket type they're registering with
     */
    conferenceRegistration?: Maybe<ConferenceRegistrationMutationPayload>;
    /** For Offline: create payments record with proof of payments and necessary data */
    confirmConferenceOfflinePayment?: Maybe<ConfirmConferenceOfflinePaymentMutation>;
    /** For Online: create payments record with proof of payments and necessary data */
    confirmConferenceOnlinePayment?: Maybe<ConfirmConferenceOnlinePaymentMutation>;
    /** Create offline payment record with proof of payments and necessary data */
    confirmMembershipOfflinePayment?: Maybe<ConfirmMembershipOfflinePaymentMutation>;
    /** Create online payment record with proof of payments and necessary data */
    confirmMembershipOnlinePayment?: Maybe<ConfirmMembershipOnlinePaymentMutation>;
    /** Sends an email to all org admins in the organization */
    contactOrganizationAdmins?: Maybe<ContactOrganizationAdminsMutation>;
    /** Create a Potential Client */
    createClient?: Maybe<PotentialClientMutationPayload>;
    /** Register your interest to attend an event */
    createInterest?: Maybe<CreateInterest>;
    /** Create a schedule for an event */
    createSchedule?: Maybe<CreateSchedule>;
    /**
     * Delete account permanently or make `user.is_active=False`.
     *
     * The behavior is defined on settings.
     * Anyway user refresh tokens are revoked.
     *
     * User must be verified and confirm password.
     */
    deleteAccount?: Maybe<DeleteAccount>;
    /** Download Certificate of an event, based on pre-selected conditions */
    downloadCertificate?: Maybe<DownloadCertificateMutation>;
    /**
     * Prepares and responds with an invitation letter for a member.
     * :arguments - Full name, Address Line 1 and Address Line 2
     */
    downloadInvitationLetter?: Maybe<DownloadInvitationLetterMutation>;
    /**
     * Verify a Google Sign in on the app
     *
     */
    googleSignIn?: Maybe<GoogleSignIn>;
    /** Allow a user join an organization and submit the necessary information */
    joinOrganization?: Maybe<JoinOrganizationMutationPayload>;
    /**
     * Leave an Organization Mutation.
     * Authenticated user should be able to leave an org
     */
    leaveOrganization?: Maybe<LeaveOrgMutation>;
    /**
     * Obtain JSON web token for given user.
     *
     * Allow to perform login with different fields,
     * and secondary email if set. The fields are
     * defined on settings.
     *
     * Not verified users can login by default. This
     * can be changes on settings.
     *
     * If user is archived, make it unarchive and
     * return `unarchiving=True` on output.
     */
    login?: Maybe<ObtainJsonWebToken>;
    memberInvitation?: Maybe<MemberInvitationMutation>;
    /** Sends an email informing the user that their membership application was successful */
    membershipApplicationSubmission?: Maybe<MembershipApplicationSubmission>;
    /** Create NextOfKin information */
    nextOfKin?: Maybe<NextOfKinMutationPayload>;
    /** Delete an NextOfKin */
    nextOfKinDelete?: Maybe<NextOfKinDeleteMutation>;
    /** Update the Notification settings of a User */
    notificationSettings?: Maybe<NotificationSettingsMutation>;
    orgAdminInvitation?: Maybe<OrgAdminInvitationMutation>;
    paidRegistration?: Maybe<PaidEventRegistration>;
    /**
     * Change account password when user knows the old password.
     *
     * A new token and refresh token are sent. User may not be verified.
     */
    passwordChange?: Maybe<PasswordChangeWithoutVerification>;
    passwordReset?: Maybe<PasswordReset>;
    /** Upload Profile Image for a user */
    profilePicture?: Maybe<UserProfilePhoto>;
    /** Same as `grapgql_jwt` implementation, with standard output. */
    refreshToken?: Maybe<RefreshToken>;
    register?: Maybe<RegisterUser>;
    registerByOrganization?: Maybe<RegisterUserByOrganization>;
    resendActivationEmail?: Maybe<ResendActivationEmail>;
    /** Same as `grapgql_jwt` implementation, with standard output. */
    revokeToken?: Maybe<RevokeToken>;
    /**
     * Send password reset email.
     * For non verified users, send an activation
     * email instead.
     */
    sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
    /** Create OrgSubDivision information */
    subdivision?: Maybe<OrgSubDivisionMutationPayload>;
    /** Delete an OrgSubDivision */
    subdivisionDelete?: Maybe<OrgSubDivisionDeleteMutation>;
    /** Submit feedback for an attended event */
    submitFeedback?: Maybe<SubmitFeedback>;
    /** Take an excuse for a member of the Org hosting the event */
    takeExcuse?: Maybe<TakeExcuseMutation>;
    /**
     * Update user model fields, defined on settings.
     *
     * User must be verified.
     */
    updateAccount?: Maybe<UpdateAccount>;
    /** Upload certificate for a User Academic Record */
    uploadAcademicCertificate?: Maybe<UploadAcademicRecordCertificate>;
    /** Create/Update a User's Academic Information */
    userAcademicInformation?: Maybe<UserAcademicRecord>;
    /** Create User's work experience record */
    userWorkExperience?: Maybe<UserWorkExperienceMutationPayload>;
    /** Delete an WorkExperience */
    userWorkExperienceDelete?: Maybe<WorkExperienceDeleteMutation>;
    /**
     * Verify user account.
     *
     * Receive the token that was sent by email.
     * If the token is valid, make the user verified
     * by making the `user.status.verified` field true.
     */
    verifyAccount?: Maybe<VerifyAccount>;
    /**
     * Verify user account.
     *
     * Receive the token that was sent by email.
     * If the token is valid, make the user verified
     * by making the `user.status.verified` field true.
     */
    verifyAccountByOrganization?: Maybe<VerifyAccountByOrganization>;
    /** Verify reset password token sent to user email. */
    verifyPasswordResetToken?: Maybe<VerifyResetPasswordToken>;
    /** Same as `grapgql_jwt` implementation, with standard output. */
    verifyToken?: Maybe<VerifyToken>;
};

export type RootMutationAcademicRecordDeleteArgs = {
    id: Scalars['ID'];
};

export type RootMutationArchiveAccountArgs = {
    password: Scalars['String'];
};

export type RootMutationAttendanceArgs = {
    code?: InputMaybe<Scalars['Int']>;
    eventId?: InputMaybe<Scalars['Int']>;
    orgId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationCheckInMemberArgs = {
    eventId: Scalars['Int'];
    orgId: Scalars['Int'];
    userEmail?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationCheckOutMemberArgs = {
    eventId: Scalars['Int'];
    orgId: Scalars['Int'];
    userEmail?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationCheckRegistrationEmailArgs = {
    email: Scalars['String'];
    eventId: Scalars['ID'];
};

export type RootMutationConferenceRegistrationArgs = {
    input: ConferenceRegistrationMutationInput;
};

export type RootMutationConfirmConferenceOfflinePaymentArgs = {
    amountPaid?: InputMaybe<Scalars['Int']>;
    email: Scalars['String'];
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    meetingId?: InputMaybe<Scalars['Int']>;
    orgId?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    payerName?: InputMaybe<Scalars['String']>;
    paymentDate?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    proofOfPayment: Scalars['Upload'];
    ticketId?: InputMaybe<Scalars['Int']>;
    txref?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationConfirmConferenceOnlinePaymentArgs = {
    amountPaid?: InputMaybe<Scalars['Int']>;
    email: Scalars['String'];
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    meetingId?: InputMaybe<Scalars['Int']>;
    orgId?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentDate?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    ticketId?: InputMaybe<Scalars['Int']>;
    txref?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationConfirmMembershipOfflinePaymentArgs = {
    amountPaid?: InputMaybe<Scalars['Int']>;
    membershipTypeId?: InputMaybe<Scalars['Int']>;
    orgPk?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    payerName?: InputMaybe<Scalars['String']>;
    paymentDate?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentStatus?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    proofOfPayment: Scalars['Upload'];
    txref?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationConfirmMembershipOnlinePaymentArgs = {
    amountPaid?: InputMaybe<Scalars['Int']>;
    membershipTypeId?: InputMaybe<Scalars['Int']>;
    orgPk?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentDate?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentStatus?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    txref?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationContactOrganizationAdminsArgs = {
    email?: InputMaybe<Scalars['String']>;
    emailMessage?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    orgPk?: InputMaybe<Scalars['Int']>;
};

export type RootMutationCreateClientArgs = {
    input: PotentialClientMutationInput;
};

export type RootMutationCreateInterestArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
    orgSlug?: InputMaybe<Scalars['String']>;
};

export type RootMutationCreateScheduleArgs = {
    description?: InputMaybe<Scalars['String']>;
    eventSlug?: InputMaybe<Scalars['String']>;
    location?: InputMaybe<Scalars['String']>;
    scheduleDate?: InputMaybe<Scalars['Date']>;
    scheduleEndTime?: InputMaybe<Scalars['Time']>;
    scheduleStartTime?: InputMaybe<Scalars['Time']>;
    speaker?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootMutationDeleteAccountArgs = {
    password: Scalars['String'];
};

export type RootMutationDownloadCertificateArgs = {
    domainName?: InputMaybe<Scalars['String']>;
    fullName?: InputMaybe<Scalars['String']>;
};

export type RootMutationDownloadInvitationLetterArgs = {
    addressLine1?: InputMaybe<Scalars['String']>;
    addressLine2?: InputMaybe<Scalars['String']>;
    domainName?: InputMaybe<Scalars['String']>;
    fullName?: InputMaybe<Scalars['String']>;
};

export type RootMutationGoogleSignInArgs = {
    googleId: Scalars['String'];
};

export type RootMutationJoinOrganizationArgs = {
    input: JoinOrganizationMutationInput;
};

export type RootMutationLeaveOrganizationArgs = {
    orgId: Scalars['ID'];
};

export type RootMutationLoginArgs = {
    email?: InputMaybe<Scalars['String']>;
    password: Scalars['String'];
    username?: InputMaybe<Scalars['String']>;
};

export type RootMutationMemberInvitationArgs = {
    orgSlug?: InputMaybe<Scalars['String']>;
    uuid?: InputMaybe<Scalars['UUID']>;
};

export type RootMutationMembershipApplicationSubmissionArgs = {
    orgId: Scalars['ID'];
    userId: Scalars['ID'];
};

export type RootMutationNextOfKinArgs = {
    input: NextOfKinMutationInput;
};

export type RootMutationNextOfKinDeleteArgs = {
    id: Scalars['ID'];
};

export type RootMutationNotificationSettingsArgs = {
    email?: InputMaybe<Scalars['Boolean']>;
    push?: InputMaybe<Scalars['Boolean']>;
    sms?: InputMaybe<Scalars['Boolean']>;
};

export type RootMutationOrgAdminInvitationArgs = {
    orgSlug?: InputMaybe<Scalars['String']>;
    uuid?: InputMaybe<Scalars['UUID']>;
};

export type RootMutationPaidRegistrationArgs = {
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    meetingId?: InputMaybe<Scalars['Int']>;
    orgId?: InputMaybe<Scalars['Int']>;
    phone?: InputMaybe<Scalars['String']>;
    ticketId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationPasswordChangeArgs = {
    newPassword1: Scalars['String'];
    newPassword2: Scalars['String'];
    oldPassword: Scalars['String'];
};

export type RootMutationPasswordResetArgs = {
    newPassword1: Scalars['String'];
    newPassword2: Scalars['String'];
    token: Scalars['String'];
};

export type RootMutationProfilePictureArgs = {
    file: Scalars['Upload'];
};

export type RootMutationRefreshTokenArgs = {
    refreshToken: Scalars['String'];
};

export type RootMutationRegisterArgs = {
    email: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    password1: Scalars['String'];
    password2: Scalars['String'];
    username: Scalars['String'];
};

export type RootMutationRegisterByOrganizationArgs = {
    email: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    orgId?: InputMaybe<Scalars['Int']>;
    password1: Scalars['String'];
    password2: Scalars['String'];
    username: Scalars['String'];
};

export type RootMutationResendActivationEmailArgs = {
    email: Scalars['String'];
};

export type RootMutationRevokeTokenArgs = {
    refreshToken: Scalars['String'];
};

export type RootMutationSendPasswordResetEmailArgs = {
    email: Scalars['String'];
};

export type RootMutationSubdivisionArgs = {
    input: OrgSubDivisionMutationInput;
};

export type RootMutationSubdivisionDeleteArgs = {
    id: Scalars['ID'];
};

export type RootMutationSubmitFeedbackArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
    howDidYouHearAboutUs?: InputMaybe<Scalars['String']>;
    keyTakeaway?: InputMaybe<Scalars['String']>;
    lectureDelivery?: InputMaybe<Scalars['String']>;
    likedLeast?: InputMaybe<Scalars['String']>;
    likedMost?: InputMaybe<Scalars['String']>;
    otherComments?: InputMaybe<Scalars['String']>;
    participantEngagement?: InputMaybe<Scalars['String']>;
};

export type RootMutationTakeExcuseArgs = {
    eventId?: InputMaybe<Scalars['Int']>;
    excuse?: InputMaybe<Scalars['String']>;
    orgId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationUpdateAccountArgs = {
    address?: InputMaybe<Scalars['String']>;
    bio?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    dob?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    gender?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    nationality?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    photo?: InputMaybe<Scalars['String']>;
    postal?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
};

export type RootMutationUploadAcademicCertificateArgs = {
    academicRecordId: Scalars['ID'];
    file: Scalars['Upload'];
};

export type RootMutationUserAcademicInformationArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    certificate?: InputMaybe<Scalars['Upload']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline?: InputMaybe<Scalars['String']>;
    graduated?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    program?: InputMaybe<Scalars['String']>;
    school?: InputMaybe<Scalars['String']>;
};

export type RootMutationUserWorkExperienceArgs = {
    input: UserWorkExperienceMutationInput;
};

export type RootMutationUserWorkExperienceDeleteArgs = {
    id: Scalars['ID'];
};

export type RootMutationVerifyAccountArgs = {
    code: Scalars['String'];
};

export type RootMutationVerifyAccountByOrganizationArgs = {
    code: Scalars['String'];
    orgId: Scalars['Int'];
};

export type RootMutationVerifyPasswordResetTokenArgs = {
    code: Scalars['String'];
};

export type RootMutationVerifyTokenArgs = {
    token: Scalars['String'];
};

export type RootQuery = {
    __typename?: 'RootQuery';
    _debug?: Maybe<DjangoDebug>;
    /** The ID of the object */
    academicRecord?: Maybe<AcademicRecordModelType>;
    /** Get all academic_record items */
    academicRecords?: Maybe<AcademicRecordModelTypeConnection>;
    /** The ID of the object */
    allOrganizationAnnouncement?: Maybe<AnnouncementType>;
    /** Fetch all announcement in a specified organization */
    allOrganizationAnnouncements?: Maybe<Array<Maybe<AnnouncementType>>>;
    /** Get all Org Announcement Items */
    allOrganizationAnnouncementsList?: Maybe<AnnouncementTypeConnection>;
    /** Fetch all events in a specified organization */
    allOrganizationEvents?: Maybe<Array<Maybe<MeetingType>>>;
    /** Get all events in a specified organization */
    allOrganizationEventsList?: Maybe<MeetingTypeConnection>;
    /** Get all events in a specified organization */
    allOrganizationUpcomingEventList?: Maybe<MeetingTypeConnection>;
    /** Fetch all upcoming events in a specified organization */
    allOrganizationUpcomingEvents?: Maybe<Array<Maybe<MeetingType>>>;
    /** Get the details of an announcement */
    announcement?: Maybe<AnnouncementType>;
    /** Get the List of announcements of organizations I belong to */
    announcements?: Maybe<Array<Maybe<AnnouncementType>>>;
    /** The ID of the object */
    department?: Maybe<DepartmentModelType>;
    /** Get all department items */
    departments?: Maybe<DepartmentModelTypeConnection>;
    /** The ID of the object */
    event?: Maybe<MeetingType>;
    /** Get the details of an event and related models using domain_name */
    eventByDomainName?: Maybe<MeetingType>;
    /** Get the details of an event */
    eventById?: Maybe<MeetingType>;
    /** Get the details of an event using the event slug */
    eventBySlug?: Maybe<MeetingType>;
    /** The ID of the object */
    eventCategory?: Maybe<MeetingCategoryType>;
    /** Get all MeetingCategory items */
    eventCategoryList?: Maybe<MeetingCategoryTypeConnection>;
    /** Get all the members of an Organization to be checked in for this event */
    eventCheckIn?: Maybe<Array<Maybe<EventCheckInType>>>;
    /** The ID of the object */
    eventTicket?: Maybe<TicketType>;
    /** Get all Event Ticket items */
    eventTicketList?: Maybe<TicketTypeConnection>;
    /** Get a list of all events/ meetings of an Organization */
    events?: Maybe<Array<Maybe<MeetingType>>>;
    /** Get all Event items */
    eventsList?: Maybe<MeetingTypeConnection>;
    externalConferencePage?: Maybe<PageDataListType>;
    /** Get Logged in user REST Token */
    getRestToken?: Maybe<Scalars['String']>;
    /** Is this user a member of an Organization */
    isOrgAdmin?: Maybe<Scalars['Boolean']>;
    me?: Maybe<UserNode>;
    /** Get all the members of an Organization */
    member?: Maybe<JoinRequestType>;
    /** Get all the members of an Organization */
    members?: Maybe<Array<Maybe<JoinRequestType>>>;
    /** Get a Single Membership Payment Record */
    membershipPayment?: Maybe<MembershipPaymentType>;
    /** Get a list of Membership Payment Records */
    membershipPaymentList?: Maybe<MembershipPaymentTypeConnection>;
    /** Get all organization a user belongs */
    myOrganizations?: Maybe<OrganizationTypeConnection>;
    /** The ID of the object */
    nextOfKin?: Maybe<NextOfKinModelType>;
    /** Get all next of kin items */
    nextOfKins?: Maybe<NextOfKinModelTypeConnection>;
    /** Get the details of a Notification & mark as read */
    notification?: Maybe<NotificationType>;
    /** Get my Notifications settings */
    notificationSettings?: Maybe<UserSettingType>;
    /** Get a list of all my Notifications */
    notifications?: Maybe<Array<NotificationType>>;
    /** Get the most recent or upcoming event in an organization */
    orgConference?: Maybe<MeetingType>;
    /** The ID of the object */
    orgExecutive?: Maybe<ExecutiveType>;
    /** Get a list of Org Executive items */
    orgExecutiveList?: Maybe<ExecutiveTypeConnection>;
    /** The ID of the object */
    orgLeadershipCategory?: Maybe<LeadershipCategoryType>;
    /** Get a list of Org LeadershipCategory items */
    orgLeadershipCategoryList?: Maybe<LeadershipCategoryTypeConnection>;
    /** The ID of the object */
    orgSubDivision?: Maybe<OrgSubDivisionType>;
    /** Get all OrgSubDivision items */
    orgSubDivisionList?: Maybe<OrgSubDivisionTypeConnection>;
    /** The ID of the object */
    orgWebsite?: Maybe<WebsiteType>;
    /** The ID of the object */
    organization?: Maybe<OrganizationType>;
    organizations?: Maybe<Array<Maybe<OrganizationType>>>;
    /** Get all organization items */
    organizationsList?: Maybe<OrganizationTypeConnection>;
    /** Get all of our potential clients */
    potentialClients?: Maybe<Array<Maybe<PotentialClientType>>>;
    /** The ID of the object */
    presentation?: Maybe<PresentationType>;
    /** Get a list of all presentations for an event */
    presentations?: Maybe<Array<Maybe<PresentationType>>>;
    /** Get all Presentation Items */
    presentationsList?: Maybe<PresentationTypeConnection>;
    /** The ID of the object */
    presenter?: Maybe<PresenterType>;
    /** Get a list of all presenters for an event */
    presenters?: Maybe<Array<Maybe<PresenterType>>>;
    /** Get all Presenter Items */
    presentersList?: Maybe<PresenterTypeConnection>;
    /** The ID of the object */
    publication?: Maybe<PublicationType>;
    /** The ID of the object */
    publicationCategory?: Maybe<PublicationCategoryType>;
    /** Get all PublicationCategoryType Items */
    publicationCategoryList?: Maybe<PublicationCategoryTypeConnection>;
    /** Get all Publications Items */
    publicationsList?: Maybe<PublicationTypeConnection>;
    /** The ID of the object */
    schedule?: Maybe<ScheduleType>;
    /** Get a list of all the schedules for an event */
    schedules?: Maybe<Array<Maybe<ScheduleType>>>;
    /** Get all Schedule Items */
    schedulesList?: Maybe<ScheduleTypeConnection>;
    /** The ID of the object */
    school?: Maybe<SchoolModelType>;
    /** Get all school items */
    schools?: Maybe<SchoolModelTypeConnection>;
    /** Get a list of sorted schedules for an event */
    sortedSchedules?: Maybe<Scalars['String']>;
    /** Get all specialty items */
    specialties?: Maybe<SpecialtyTypeConnection>;
    /** The ID of the object */
    specialty?: Maybe<SpecialtyType>;
    /** Get all sub_specialty items */
    subSpecialties?: Maybe<SubSpecialtyTypeConnection>;
    /** The ID of the object */
    subSpecialty?: Maybe<SubSpecialtyType>;
    /** The ID of the object */
    subdivision?: Maybe<OrgSubDivisionType>;
    /** Get all subdivision items */
    subdivisions?: Maybe<OrgSubDivisionTypeConnection>;
    /** Fetch the three topmost events in a specified organization */
    threeTopmostEvents?: Maybe<Array<Maybe<MeetingType>>>;
    /** Get a list of all upcoming events/ meetings of all Organizations I belong to */
    upcomingEvents?: Maybe<Array<Maybe<MeetingType>>>;
    user?: Maybe<UserType>;
    /** The ID of the object */
    userRelay?: Maybe<UserNode>;
    /** Verify the Attendance Code for an Event */
    verifyAttendanceCode?: Maybe<Scalars['Boolean']>;
    website?: Maybe<WebsiteType>;
    websiteAboutPage?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Get all Website Banner Slider Image items */
    websiteBannerSliderImages?: Maybe<WebsiteBannerSliderImageTypeConnection>;
    /** The ID of the object */
    websiteFaq?: Maybe<WebsiteFaqType>;
    /** Get a list of Single WebsiteFaq Items */
    websiteFaqList?: Maybe<WebsiteFaqTypeConnection>;
    websiteMembershipTypes?: Maybe<Array<Maybe<OrgMembershipType>>>;
    /** Get all Organization's Payment API */
    websitePaymentApi?: Maybe<OrganizationPaymentApiTypeConnection>;
    /** Get a list of all presentations/publications in an organization */
    websitePresentations?: Maybe<Array<Maybe<PresentationType>>>;
    /** Get all Website Items */
    websitesList?: Maybe<WebsiteTypeConnection>;
    /** The ID of the object */
    workExperience?: Maybe<WorkExperienceModelType>;
    /** Get all work_experience items */
    workExperiences?: Maybe<WorkExperienceModelTypeConnection>;
};

export type RootQueryAcademicRecordArgs = {
    id: Scalars['ID'];
};

export type RootQueryAcademicRecordsArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryAllOrganizationAnnouncementArgs = {
    id: Scalars['ID'];
};

export type RootQueryAllOrganizationAnnouncementsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryAllOrganizationAnnouncementsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootQueryAllOrganizationEventsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryAllOrganizationEventsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
};

export type RootQueryAllOrganizationUpcomingEventListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
};

export type RootQueryAllOrganizationUpcomingEventsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryAnnouncementArgs = {
    id: Scalars['Int'];
};

export type RootQueryAnnouncementsArgs = {
    orgSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryDepartmentArgs = {
    id: Scalars['ID'];
};

export type RootQueryDepartmentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type RootQueryEventArgs = {
    id: Scalars['ID'];
};

export type RootQueryEventByDomainNameArgs = {
    domainName: Scalars['String'];
};

export type RootQueryEventByIdArgs = {
    id: Scalars['Int'];
};

export type RootQueryEventBySlugArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryEventCategoryArgs = {
    id: Scalars['ID'];
};

export type RootQueryEventCategoryListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryEventCheckInArgs = {
    eventId: Scalars['Int'];
    orgId: Scalars['Int'];
};

export type RootQueryEventTicketArgs = {
    id: Scalars['ID'];
};

export type RootQueryEventTicketListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryEventsArgs = {
    name?: InputMaybe<Scalars['String']>;
    orgSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryEventsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
};

export type RootQueryExternalConferencePageArgs = {
    domainName?: InputMaybe<Scalars['String']>;
};

export type RootQueryIsOrgAdminArgs = {
    organizationId: Scalars['Int'];
};

export type RootQueryMemberArgs = {
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
};

export type RootQueryMembersArgs = {
    organizationId: Scalars['Int'];
};

export type RootQueryMembershipPaymentArgs = {
    paymentId: Scalars['ID'];
};

export type RootQueryMembershipPaymentListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    membershipType?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgId: Scalars['ID'];
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    userId: Scalars['ID'];
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryMyOrganizationsArgs = {
    abbrev?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    myOrg_Approved?: InputMaybe<Scalars['Boolean']>;
    myOrg_Blocked?: InputMaybe<Scalars['Boolean']>;
    myOrg_User?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type RootQueryNextOfKinArgs = {
    id: Scalars['ID'];
};

export type RootQueryNextOfKinsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    phone?: InputMaybe<Scalars['String']>;
    relationship?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryNotificationArgs = {
    id: Scalars['Int'];
};

export type RootQueryOrgConferenceArgs = {
    domainName: Scalars['String'];
};

export type RootQueryOrgExecutiveArgs = {
    id: Scalars['ID'];
};

export type RootQueryOrgExecutiveListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    current?: InputMaybe<Scalars['Boolean']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    position_Id?: InputMaybe<Scalars['Float']>;
    startTenure?: InputMaybe<Scalars['Date']>;
};

export type RootQueryOrgLeadershipCategoryArgs = {
    id: Scalars['ID'];
};

export type RootQueryOrgLeadershipCategoryListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryOrgSubDivisionArgs = {
    id: Scalars['ID'];
};

export type RootQueryOrgSubDivisionListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    chairperson?: InputMaybe<Scalars['String']>;
    dateOfInauguration?: InputMaybe<Scalars['Date']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meetingDaysTime?: InputMaybe<Scalars['String']>;
    meetingVenue?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type RootQueryOrgWebsiteArgs = {
    id: Scalars['ID'];
};

export type RootQueryOrganizationArgs = {
    id: Scalars['ID'];
};

export type RootQueryOrganizationsListArgs = {
    abbrev?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    myOrg_Approved?: InputMaybe<Scalars['Boolean']>;
    myOrg_Blocked?: InputMaybe<Scalars['Boolean']>;
    myOrg_User?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type RootQueryPotentialClientsArgs = {
    id?: InputMaybe<Scalars['Int']>;
};

export type RootQueryPresentationArgs = {
    id: Scalars['ID'];
};

export type RootQueryPresentationsArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryPresentationsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    domainName: Scalars['String'];
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootQueryPresenterArgs = {
    id: Scalars['ID'];
};

export type RootQueryPresentersArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryPresentersListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type RootQueryPublicationArgs = {
    id: Scalars['ID'];
};

export type RootQueryPublicationCategoryArgs = {
    id: Scalars['ID'];
};

export type RootQueryPublicationCategoryListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    domainName: Scalars['String'];
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryPublicationsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    domainName: Scalars['String'];
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootQueryScheduleArgs = {
    id: Scalars['ID'];
};

export type RootQuerySchedulesArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootQuerySchedulesListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    location?: InputMaybe<Scalars['String']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootQuerySchoolArgs = {
    id: Scalars['ID'];
};

export type RootQuerySchoolsArgs = {
    address?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    short?: InputMaybe<Scalars['String']>;
};

export type RootQuerySortedSchedulesArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootQuerySpecialtiesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQuerySpecialtyArgs = {
    id: Scalars['ID'];
};

export type RootQuerySubSpecialtiesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    specialty_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQuerySubSpecialtyArgs = {
    id: Scalars['ID'];
};

export type RootQuerySubdivisionArgs = {
    id: Scalars['ID'];
};

export type RootQuerySubdivisionsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    chairperson?: InputMaybe<Scalars['String']>;
    dateOfInauguration?: InputMaybe<Scalars['Date']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meetingDaysTime?: InputMaybe<Scalars['String']>;
    meetingVenue?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type RootQueryThreeTopmostEventsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryUpcomingEventsArgs = {
    orgSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryUserRelayArgs = {
    id: Scalars['ID'];
};

export type RootQueryVerifyAttendanceCodeArgs = {
    eventCode: Scalars['Int'];
    eventSlug: Scalars['String'];
};

export type RootQueryWebsiteArgs = {
    domainName: Scalars['String'];
};

export type RootQueryWebsiteAboutPageArgs = {
    domainName: Scalars['String'];
};

export type RootQueryWebsiteBannerSliderImagesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    domainName: Scalars['String'];
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryWebsiteFaqArgs = {
    id: Scalars['ID'];
};

export type RootQueryWebsiteFaqListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    createdBy_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryWebsiteMembershipTypesArgs = {
    domainName: Scalars['String'];
};

export type RootQueryWebsitePaymentApiArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    platform?: InputMaybe<Scalars['String']>;
};

export type RootQueryWebsitePresentationsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryWebsitesListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    customDomain?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org?: InputMaybe<Scalars['ID']>;
    subDomain?: InputMaybe<Scalars['String']>;
};

export type RootQueryWorkExperienceArgs = {
    id: Scalars['ID'];
};

export type RootQueryWorkExperiencesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    designation?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
    state?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The Event Schedule object */
export type ScheduleType = Node & {
    __typename?: 'ScheduleType';
    description?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    location: Scalars['String'];
    meeting?: Maybe<MeetingType>;
    scheduleDate?: Maybe<Scalars['Date']>;
    scheduleEndTime?: Maybe<Scalars['Time']>;
    scheduleStartTime?: Maybe<Scalars['Time']>;
    speaker?: Maybe<PresenterType>;
    title: Scalars['String'];
};

export type ScheduleTypeConnection = {
    __typename?: 'ScheduleTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ScheduleTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `ScheduleType` and its cursor. */
export type ScheduleTypeEdge = {
    __typename?: 'ScheduleTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ScheduleType>;
};

/**  School model type definition  */
export type SchoolModelType = Node & {
    __typename?: 'SchoolModelType';
    address: Scalars['String'];
    country: Scalars['String'];
    created: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    name: Scalars['String'];
    pk: Scalars['ID'];
    schAcad: AcademicRecordModelTypeConnection;
    schDept: DepartmentModelTypeConnection;
    /** Popular abbreviation of School name */
    short?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
};

/**  School model type definition  */
export type SchoolModelTypeSchAcadArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/**  School model type definition  */
export type SchoolModelTypeSchDeptArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type SchoolModelTypeConnection = {
    __typename?: 'SchoolModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<SchoolModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `SchoolModelType` and its cursor. */
export type SchoolModelTypeEdge = {
    __typename?: 'SchoolModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<SchoolModelType>;
};

/**
 * Send password reset email.
 * For non verified users, send an activation
 * email instead.
 */
export type SendPasswordResetEmail = {
    __typename?: 'SendPasswordResetEmail';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/** An Specialty Model Object */
export type SpecialtyType = Node & {
    __typename?: 'SpecialtyType';
    /** The ID of the object. */
    id: Scalars['ID'];
    joinrequestSet: JoinRequestTypeConnection;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    subspecialtySet: SubSpecialtyTypeConnection;
    uuid: Scalars['UUID'];
};

/** An Specialty Model Object */
export type SpecialtyTypeJoinrequestSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** An Specialty Model Object */
export type SpecialtyTypeSubspecialtySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    specialty_Id?: InputMaybe<Scalars['Float']>;
};

export type SpecialtyTypeConnection = {
    __typename?: 'SpecialtyTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<SpecialtyTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `SpecialtyType` and its cursor. */
export type SpecialtyTypeEdge = {
    __typename?: 'SpecialtyTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<SpecialtyType>;
};

/** The ticket object for an event */
export type SponsorType = Node & {
    __typename?: 'SponsorType';
    /** The ID of the object. */
    id: Scalars['ID'];
    logoUrl?: Maybe<Scalars['String']>;
    meeting?: Maybe<MeetingType>;
    name?: Maybe<Scalars['String']>;
};

export type SponsorTypeConnection = {
    __typename?: 'SponsorTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<SponsorTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `SponsorType` and its cursor. */
export type SponsorTypeEdge = {
    __typename?: 'SponsorTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<SponsorType>;
};

/** An SubSpecialty Model Object */
export type SubSpecialtyType = Node & {
    __typename?: 'SubSpecialtyType';
    /** The ID of the object. */
    id: Scalars['ID'];
    joinrequestSet: JoinRequestTypeConnection;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    specialty?: Maybe<SpecialtyType>;
    uuid: Scalars['UUID'];
};

/** An SubSpecialty Model Object */
export type SubSpecialtyTypeJoinrequestSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type SubSpecialtyTypeConnection = {
    __typename?: 'SubSpecialtyTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<SubSpecialtyTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `SubSpecialtyType` and its cursor. */
export type SubSpecialtyTypeEdge = {
    __typename?: 'SubSpecialtyTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<SubSpecialtyType>;
};

/** Submit feedback for an attended event */
export type SubmitFeedback = {
    __typename?: 'SubmitFeedback';
    feedback?: Maybe<FeedbackType>;
    howDidYouHearAboutUs?: Maybe<HowDidYouHearAboutUsType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Take attendance of a logged in user for an event */
export type TakeAttendance = {
    __typename?: 'TakeAttendance';
    attendance?: Maybe<AttendanceType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Take an excuse for a member of the Org hosting the event */
export type TakeExcuseMutation = {
    __typename?: 'TakeExcuseMutation';
    attendance?: Maybe<AttendanceType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** The ticket object for an event */
export type TicketType = Node & {
    __typename?: 'TicketType';
    conferenceTicket: ConferenceRegistrationTypeConnection;
    earlyBirdDeadline?: Maybe<Scalars['Date']>;
    earlyBirdFee?: Maybe<Scalars['String']>;
    earlyBirdFeeCurrency: Scalars['String'];
    earlyBirdFeeStr?: Maybe<Scalars['String']>;
    earlyBirdFeeValue?: Maybe<Scalars['Int']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    lateBirdFee?: Maybe<Scalars['String']>;
    lateBirdFeeCurrency: Scalars['String'];
    lateBirdFeeStr?: Maybe<Scalars['String']>;
    lateBirdFeeValue?: Maybe<Scalars['Int']>;
    meeting?: Maybe<MeetingType>;
    name: Scalars['String'];
    org?: Maybe<OrganizationType>;
    pk?: Maybe<Scalars['ID']>;
    ticketPaid: PaymentTypeConnection;
};

/** The ticket object for an event */
export type TicketTypeConferenceTicketArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The ticket object for an event */
export type TicketTypeTicketPaidArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    ticket?: InputMaybe<Scalars['ID']>;
};

export type TicketTypeConnection = {
    __typename?: 'TicketTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<TicketTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `TicketType` and its cursor. */
export type TicketTypeEdge = {
    __typename?: 'TicketTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<TicketType>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
    __typename?: 'UpdateAccount';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Upload certificate for a User Academic Record */
export type UploadAcademicRecordCertificate = {
    __typename?: 'UploadAcademicRecordCertificate';
    fileUrl?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/** Create/Update a User's Academic Information */
export type UserAcademicRecord = {
    __typename?: 'UserAcademicRecord';
    academicData?: Maybe<AcademicRecordModelType>;
    errors?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type UserNode = Node & {
    __typename?: 'UserNode';
    /** The Admin that approved - if joining with Organization is not automatic */
    acceptor: JoinRequestTypeConnection;
    address?: Maybe<Scalars['String']>;
    announcementSet: AnnouncementTypeConnection;
    approveAdmin: AttendanceTypeConnection;
    archived?: Maybe<Scalars['Boolean']>;
    attendanceSet: AttendanceTypeConnection;
    bio?: Maybe<Scalars['String']>;
    /** The Admin that blocked the person */
    blocker: JoinRequestTypeConnection;
    conferencePayments: PaymentTypeConnection;
    /** Indicates if a new user has confirmed email */
    confirmedEmail?: Maybe<Scalars['Boolean']>;
    /** Indicates if a new user has confirmed phone number */
    confirmedPhone?: Maybe<Scalars['Boolean']>;
    country: AccountsUserCountryChoices;
    creator: OrganizationTypeConnection;
    dateJoined: Scalars['DateTime'];
    /** Enter birthday in YYYY-MM-DD format  */
    dob?: Maybe<Scalars['Date']>;
    email: Scalars['String'];
    faqCreator: WebsiteFaqTypeConnection;
    feedbackSet: FeedbackTypeConnection;
    firstName: Scalars['String'];
    gender?: Maybe<AccountsUserGenderChoices>;
    howdidyouhearaboutusSet: HowDidYouHearAboutUsTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    importcontactSet: MemberInvitationTypeConnection;
    /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
    isActive: Scalars['Boolean'];
    /** Designates whether the user can log into this admin site. */
    isStaff: Scalars['Boolean'];
    kinsman: NextOfKinModelTypeConnection;
    lastLogin?: Maybe<Scalars['DateTime']>;
    lastName: Scalars['String'];
    meetingSet: MeetingTypeConnection;
    /** The User that wants to join the organization */
    member: JoinRequestTypeConnection;
    memberUsers: ConferenceRegistrationTypeConnection;
    membersMembershippayments: MembershipPaymentTypeConnection;
    middleName: Scalars['String'];
    nationality: AccountsUserNationalityChoices;
    notificationSetting?: Maybe<UserSettingType>;
    orgAdmins: OrgAdminTypeConnection;
    orgCreator: OrgAdminTypeConnection;
    orgadmininvitationSet: OrgAdminInvitationTypeConnection;
    organizationmembershiptypeSet: Array<OrgMembershipType>;
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    /** Upload size of photo should be a maximum of 2mb */
    photo?: Maybe<Scalars['String']>;
    pk?: Maybe<Scalars['Int']>;
    postal?: Maybe<Scalars['String']>;
    presentationCreator: PresenterTypeConnection;
    presentationSet: PresentationTypeConnection;
    presenterPerson: PresenterTypeConnection;
    publicationSet: PublicationTypeConnection;
    qrCodeFile?: Maybe<Scalars['String']>;
    records: AcademicRecordModelTypeConnection;
    secondaryEmail?: Maybe<Scalars['String']>;
    sender: Array<NotificationType>;
    socialAuthPhotoUrl?: Maybe<Scalars['String']>;
    state?: Maybe<AccountsUserStateChoices>;
    ticketSet: TicketTypeConnection;
    timezone: AccountsUserTimezoneChoices;
    /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
    username: Scalars['String'];
    verified?: Maybe<Scalars['Boolean']>;
    workexperienceSet: WorkExperienceModelTypeConnection;
};

export type UserNodeAcceptorArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeAnnouncementSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type UserNodeApproveAdminArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    excuse?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    interested?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    present?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeAttendanceSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    excuse?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    interested?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    present?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeBlockerArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeConferencePaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    ticket?: InputMaybe<Scalars['ID']>;
};

export type UserNodeCreatorArgs = {
    abbrev?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    myOrg_Approved?: InputMaybe<Scalars['Boolean']>;
    myOrg_Blocked?: InputMaybe<Scalars['Boolean']>;
    myOrg_User?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type UserNodeFaqCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    createdBy_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeFeedbackSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

export type UserNodeHowdidyouhearaboutusSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

export type UserNodeImportcontactSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    used?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeKinsmanArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    phone?: InputMaybe<Scalars['String']>;
    relationship?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeMeetingSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
};

export type UserNodeMemberArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeMemberUsersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeMembersMembershippaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    membershipType?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeOrgAdminsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

export type UserNodeOrgCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

export type UserNodeOrgadmininvitationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
};

export type UserNodePresentationCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type UserNodePresentationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type UserNodePresenterPersonArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type UserNodePublicationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type UserNodeRecordsArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeTicketSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeWorkexperienceSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    designation?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
    state?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** Upload Profile Image for a user */
export type UserProfilePhoto = {
    __typename?: 'UserProfilePhoto';
    ok?: Maybe<Scalars['Boolean']>;
    photoUrl?: Maybe<Scalars['String']>;
};

/** The UserSetting object */
export type UserSettingType = {
    __typename?: 'UserSettingType';
    createdAt: Scalars['DateTime'];
    email: Scalars['Boolean'];
    id: Scalars['ID'];
    push: Scalars['Boolean'];
    sms: Scalars['Boolean'];
    updatedAt: Scalars['DateTime'];
    user?: Maybe<UserType>;
};

/** The User model */
export type UserType = Node & {
    __typename?: 'UserType';
    /** The Admin that approved - if joining with Organization is not automatic */
    acceptor: JoinRequestTypeConnection;
    address?: Maybe<Scalars['String']>;
    announcementSet: AnnouncementTypeConnection;
    approveAdmin: AttendanceTypeConnection;
    attendanceSet: AttendanceTypeConnection;
    bio?: Maybe<Scalars['String']>;
    /** The Admin that blocked the person */
    blocker: JoinRequestTypeConnection;
    conferencePayments: PaymentTypeConnection;
    /** Indicates if a new user has confirmed email */
    confirmedEmail?: Maybe<Scalars['Boolean']>;
    /** Indicates if a new user has confirmed phone number */
    confirmedPhone?: Maybe<Scalars['Boolean']>;
    country: AccountsUserCountryChoices;
    creator: OrganizationTypeConnection;
    dateJoined: Scalars['DateTime'];
    /** Enter birthday in YYYY-MM-DD format  */
    dob?: Maybe<Scalars['Date']>;
    email: Scalars['String'];
    faqCreator: WebsiteFaqTypeConnection;
    feedbackSet: FeedbackTypeConnection;
    firstName: Scalars['String'];
    gender?: Maybe<AccountsUserGenderChoices>;
    howdidyouhearaboutusSet: HowDidYouHearAboutUsTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    importcontactSet: MemberInvitationTypeConnection;
    /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
    isActive: Scalars['Boolean'];
    kinsman: NextOfKinModelTypeConnection;
    lastLogin?: Maybe<Scalars['DateTime']>;
    lastName: Scalars['String'];
    meetingSet: MeetingTypeConnection;
    /** The User that wants to join the organization */
    member: JoinRequestTypeConnection;
    memberUsers: ConferenceRegistrationTypeConnection;
    membersMembershippayments: MembershipPaymentTypeConnection;
    middleName: Scalars['String'];
    nationality: AccountsUserNationalityChoices;
    notificationSetting?: Maybe<UserSettingType>;
    orgAdmins: OrgAdminTypeConnection;
    orgCreator: OrgAdminTypeConnection;
    orgadmininvitationSet: OrgAdminInvitationTypeConnection;
    organizationmembershiptypeSet: Array<OrgMembershipType>;
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    /** Upload size of photo should be a maximum of 2mb */
    photo?: Maybe<Scalars['String']>;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    postal?: Maybe<Scalars['String']>;
    presentationCreator: PresenterTypeConnection;
    presentationSet: PresentationTypeConnection;
    presenterPerson: PresenterTypeConnection;
    publicationSet: PublicationTypeConnection;
    qrCode?: Maybe<Scalars['String']>;
    qrCodeFile?: Maybe<Scalars['String']>;
    records: AcademicRecordModelTypeConnection;
    sender: Array<NotificationType>;
    socialAuthPhotoUrl?: Maybe<Scalars['String']>;
    state?: Maybe<AccountsUserStateChoices>;
    ticketSet: TicketTypeConnection;
    timezone: AccountsUserTimezoneChoices;
    /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
    username: Scalars['String'];
    workexperienceSet: WorkExperienceModelTypeConnection;
};

/** The User model */
export type UserTypeAcceptorArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeAnnouncementSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypeApproveAdminArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    excuse?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    interested?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    present?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeAttendanceSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    excuse?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    interested?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    present?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeBlockerArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeConferencePaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    ticket?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypeCreatorArgs = {
    abbrev?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    myOrg_Approved?: InputMaybe<Scalars['Boolean']>;
    myOrg_Blocked?: InputMaybe<Scalars['Boolean']>;
    myOrg_User?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    slug?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypeFaqCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    createdBy_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeFeedbackSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypeHowdidyouhearaboutusSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypeImportcontactSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    used?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeKinsmanArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    phone?: InputMaybe<Scalars['String']>;
    relationship?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeMeetingSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypeMemberArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeMemberUsersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeMembersMembershippaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    membershipType?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeOrgAdminsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypeOrgCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypeOrgadmininvitationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypePresentationCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypePresentationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypePresenterPersonArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypePublicationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypeRecordsArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeTicketSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeWorkexperienceSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    designation?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
    state?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserWorkExperienceMutationInput = {
    address?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    /** Indicates if this is your current work */
    current?: InputMaybe<Scalars['Boolean']>;
    /** Full description of what you duties entails */
    description?: InputMaybe<Scalars['String']>;
    designation?: InputMaybe<Scalars['String']>;
    /** YYYY-MM-DD, Leave blank if still working in that role */
    endDate?: InputMaybe<Scalars['Date']>;
    id?: InputMaybe<Scalars['Int']>;
    /** YYYY-MM-DD */
    startDate: Scalars['Date'];
    state?: InputMaybe<Scalars['String']>;
    user: Scalars['String'];
};

/** Create User's work experience record */
export type UserWorkExperienceMutationPayload = {
    __typename?: 'UserWorkExperienceMutationPayload';
    address?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    companyName?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    /** Indicates if this is your current work */
    current?: Maybe<Scalars['Boolean']>;
    /** Full description of what you duties entails */
    description?: Maybe<Scalars['String']>;
    designation?: Maybe<Scalars['String']>;
    /** YYYY-MM-DD, Leave blank if still working in that role */
    endDate?: Maybe<Scalars['Date']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    /** YYYY-MM-DD */
    startDate?: Maybe<Scalars['Date']>;
    state?: Maybe<Scalars['String']>;
    updated?: Maybe<Scalars['DateTime']>;
    user?: Maybe<Scalars['String']>;
    uuid?: Maybe<Scalars['String']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
    __typename?: 'VerifyAccount';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccountByOrganization = {
    __typename?: 'VerifyAccountByOrganization';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/** Verify reset password token sent to user email. */
export type VerifyResetPasswordToken = {
    __typename?: 'VerifyResetPasswordToken';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
    __typename?: 'VerifyToken';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    payload?: Maybe<Scalars['GenericScalar']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** The website banner images type */
export type WebsiteBannerSliderImageType = Node & {
    __typename?: 'WebsiteBannerSliderImageType';
    bannerBgImage?: Maybe<Scalars['String']>;
    bannerBgImageUrl?: Maybe<Scalars['String']>;
    bannerSubtitle?: Maybe<Scalars['String']>;
    bannerTitle?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    org?: Maybe<OrganizationType>;
    website?: Maybe<WebsiteType>;
};

export type WebsiteBannerSliderImageTypeConnection = {
    __typename?: 'WebsiteBannerSliderImageTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<WebsiteBannerSliderImageTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `WebsiteBannerSliderImageType` and its cursor. */
export type WebsiteBannerSliderImageTypeEdge = {
    __typename?: 'WebsiteBannerSliderImageTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<WebsiteBannerSliderImageType>;
};

/** The WebsiteFAQ Model object */
export type WebsiteFaqType = Node & {
    __typename?: 'WebsiteFaqType';
    answer?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    question?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
};

export type WebsiteFaqTypeConnection = {
    __typename?: 'WebsiteFaqTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<WebsiteFaqTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `WebsiteFaqType` and its cursor. */
export type WebsiteFaqTypeEdge = {
    __typename?: 'WebsiteFaqTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<WebsiteFaqType>;
};

/** The website object related to an organization and event */
export type WebsiteType = Node & {
    __typename?: 'WebsiteType';
    bannerLogo?: Maybe<Scalars['String']>;
    bannerLogoUrl?: Maybe<Scalars['String']>;
    body?: Maybe<Scalars['String']>;
    /** The Body Font for the Website */
    bodyFont?: Maybe<Scalars['String']>;
    /** Custom external domain */
    customDomain?: Maybe<Scalars['String']>;
    event?: Maybe<MeetingType>;
    header?: Maybe<Scalars['String']>;
    headerTitle?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    org?: Maybe<OrganizationType>;
    /** The primary color for website background */
    primaryBgColor?: Maybe<Scalars['String']>;
    /** The primary color for buttons */
    primaryBtnColor?: Maybe<Scalars['String']>;
    /** The primary color as theme for pages */
    primaryColor?: Maybe<Scalars['String']>;
    /** The Primary Font for the Website */
    primaryFont?: Maybe<Scalars['String']>;
    /** The primary color for texts */
    primaryTextColor?: Maybe<Scalars['String']>;
    /** The secondary color for website background */
    secondaryBgColor?: Maybe<Scalars['String']>;
    /** The secondary color for buttons */
    secondaryBtnColor?: Maybe<Scalars['String']>;
    /** The secondary color as theme for pages */
    secondaryColor?: Maybe<Scalars['String']>;
    /** The Secondary Font for the Website */
    secondaryFont?: Maybe<Scalars['String']>;
    /** The secondary color for texts */
    secondaryTextColor?: Maybe<Scalars['String']>;
    /** chosen subdomain on peddlesoft.com */
    subDomain?: Maybe<Scalars['String']>;
    webLogo?: Maybe<Scalars['String']>;
    webLogoUrl?: Maybe<Scalars['String']>;
    websiteSliderImages: WebsiteBannerSliderImageTypeConnection;
};

/** The website object related to an organization and event */
export type WebsiteTypeWebsiteSliderImagesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type WebsiteTypeConnection = {
    __typename?: 'WebsiteTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<WebsiteTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `WebsiteType` and its cursor. */
export type WebsiteTypeEdge = {
    __typename?: 'WebsiteTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<WebsiteType>;
};

/** Delete an WorkExperience */
export type WorkExperienceDeleteMutation = {
    __typename?: 'WorkExperienceDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/**  WorkExperience model type definition  */
export type WorkExperienceModelType = Node & {
    __typename?: 'WorkExperienceModelType';
    address?: Maybe<Scalars['String']>;
    companyName?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    /** Indicates if this is your current work */
    current?: Maybe<Scalars['Boolean']>;
    /** Full description of what you duties entails */
    description?: Maybe<Scalars['String']>;
    designation?: Maybe<Scalars['String']>;
    /** YYYY-MM-DD, Leave blank if still working in that role */
    endDate?: Maybe<Scalars['Date']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    pk: Scalars['ID'];
    /** YYYY-MM-DD */
    startDate: Scalars['Date'];
    state?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    user: UserType;
    uuid: Scalars['UUID'];
};

export type WorkExperienceModelTypeConnection = {
    __typename?: 'WorkExperienceModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<WorkExperienceModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `WorkExperienceModelType` and its cursor. */
export type WorkExperienceModelTypeEdge = {
    __typename?: 'WorkExperienceModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<WorkExperienceModelType>;
};

export type RegisterUserMutationVariables = Exact<{
    email: Scalars['String'];
    first_name: Scalars['String'];
    last_name: Scalars['String'];
    username: Scalars['String'];
    password_1: Scalars['String'];
    password_2: Scalars['String'];
    orgId: Scalars['Int'];
}>;

export type RegisterUserMutation = {
    __typename?: 'RootMutation';
    registerByOrganization?: {
        __typename?: 'RegisterUserByOrganization';
        token?: string | null;
        success?: boolean | null;
        errors?: any | null;
    } | null;
};

export type LoginUserMutationVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
}>;

export type LoginUserMutation = {
    __typename?: 'RootMutation';
    login?: {
        __typename?: 'ObtainJSONWebToken';
        token?: string | null;
        success?: boolean | null;
        errors?: any | null;
    } | null;
};

export type VerifyAccountMutationVariables = Exact<{
    code: Scalars['String'];
}>;

export type VerifyAccountMutation = {
    __typename?: 'RootMutation';
    verifyAccount?: {
        __typename?: 'VerifyAccount';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type VerifyAccountByOrganizationMutationVariables = Exact<{
    code: Scalars['String'];
    orgId: Scalars['Int'];
}>;

export type VerifyAccountByOrganizationMutation = {
    __typename?: 'RootMutation';
    verifyAccountByOrganization?: {
        __typename?: 'VerifyAccountByOrganization';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type ResendActivationEmailMutationVariables = Exact<{
    email: Scalars['String'];
}>;

export type ResendActivationEmailMutation = {
    __typename?: 'RootMutation';
    resendActivationEmail?: {
        __typename?: 'ResendActivationEmail';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type ConfirmMembershipOnlinePaymentMutationVariables = Exact<{
    org_pk: Scalars['Int'];
    membership_type_id?: InputMaybe<Scalars['Int']>;
    user_id: Scalars['Int'];
    amount_paid: Scalars['Int'];
    paid: Scalars['Boolean'];
    payment_approval: Scalars['Boolean'];
    payment_type: Scalars['String'];
    txref: Scalars['String'];
    payment_name?: InputMaybe<Scalars['String']>;
    payment_status?: InputMaybe<Scalars['String']>;
}>;

// try mutation without an "s"
export type ConfirmMembershipOnlinePaymentMutations = {
    __typename?: 'RootMutation';
    confirmMembershipOnlinePayment?: {
        __typename?: 'ConfirmMembershipOnlinePaymentMutation';
        error?: string | null;
        success?: boolean | null;
    } | null;
};

export type SendPasswordResetEmailMutationVariables = Exact<{
    email: Scalars['String'];
}>;

export type SendPasswordResetEmailMutation = {
    __typename?: 'RootMutation';
    sendPasswordResetEmail?: {
        __typename?: 'SendPasswordResetEmail';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type VerifyResetPasswordTokenMutationVariables = Exact<{
    code: Scalars['String'];
}>;

export type VerifyResetPasswordTokenMutation = {
    __typename?: 'RootMutation';
    verifyPasswordResetToken?: {
        __typename?: 'VerifyResetPasswordToken';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type PasswordResetMutationVariables = Exact<{
    token: Scalars['String'];
    newPassword1: Scalars['String'];
    newPassword2: Scalars['String'];
}>;

export type PasswordResetMutation = {
    __typename?: 'RootMutation';
    passwordReset?: {
        __typename?: 'PasswordReset';
        success?: boolean | null;
        errors?: any | null;
    } | null;
};

export type SubmitUserPersonalInformationMutationVariables = Exact<{
    first_name: Scalars['String'];
    middle_name?: InputMaybe<Scalars['String']>;
    last_name: Scalars['String'];
    dob: Scalars['String'];
    phone?: InputMaybe<Scalars['String']>;
    bio?: InputMaybe<Scalars['String']>;
    gender: Scalars['String'];
    address: Scalars['String'];
    email: Scalars['String'];
    postal?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    nationality?: InputMaybe<Scalars['String']>;
}>;

export type SubmitUserPersonalInformationMutation = {
    __typename?: 'RootMutation';
    updateAccount?: {
        __typename?: 'UpdateAccount';
        success?: boolean | null;
        errors?: any | null;
    } | null;
};

export type NextOfKinMutationPayloadMutationVariables = Exact<{
    user: Scalars['String'];
    first_name: Scalars['String'];
    middle_name?: InputMaybe<Scalars['String']>;
    last_name: Scalars['String'];
    phone: Scalars['String'];
    email: Scalars['String'];
    relationship: Scalars['String'];
}>;

export type NextOfKinMutationPayloadMutation = {
    __typename?: 'RootMutation';
    nextOfKin?: {
        __typename?: 'NextOfKinMutationPayload';
        id?: number | null;
        user?: string | null;
        firstName?: string | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type SubmitUserProfilePictureMutationVariables = Exact<{
    profile_picture: Scalars['Upload'];
}>;

export type SubmitUserProfilePictureMutation = {
    __typename?: 'RootMutation';
    profilePicture?: { __typename?: 'UserProfilePhoto'; ok?: boolean | null } | null;
};

export type UpdateWorkExperienceMutationVariables = Exact<{
    user: Scalars['String'];
    current?: InputMaybe<Scalars['Boolean']>;
    companyName: Scalars['String'];
    designation: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    country: Scalars['String'];
    state?: InputMaybe<Scalars['String']>;
    address: Scalars['String'];
    startDate: Scalars['Date'];
    endDate?: InputMaybe<Scalars['Date']>;
}>;

export type UpdateWorkExperienceMutation = {
    __typename?: 'RootMutation';
    userWorkExperience?: {
        __typename?: 'UserWorkExperienceMutationPayload';
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type UpdateWorkExperienceWithEndDateMutationVariables = Exact<{
    user: Scalars['String'];
    current: Scalars['Boolean'];
    companyName: Scalars['String'];
    designation: Scalars['String'];
    description: Scalars['String'];
    country: Scalars['String'];
    state: Scalars['String'];
    address: Scalars['String'];
    startDate: Scalars['Date'];
    endDate: Scalars['Date'];
}>;

export type UpdateWorkExperienceWithEndDateMutation = {
    __typename?: 'RootMutation';
    userWorkExperience?: {
        __typename?: 'UserWorkExperienceMutationPayload';
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type UpdateWorkExperienceEditMutationVariables = Exact<{
    id: Scalars['Int'];
    user: Scalars['String'];
    current: Scalars['Boolean'];
    companyName: Scalars['String'];
    designation: Scalars['String'];
    country: Scalars['String'];
    state: Scalars['String'];
    address: Scalars['String'];
    startDate: Scalars['Date'];
}>;

export type UpdateWorkExperienceEditMutation = {
    __typename?: 'RootMutation';
    userWorkExperience?: {
        __typename?: 'UserWorkExperienceMutationPayload';
        id?: number | null;
        user?: string | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type UpdateWorkExperienceWithEndDateSecondMutationVariables = Exact<{
    id: Scalars['Int'];
    user: Scalars['String'];
    current: Scalars['Boolean'];
    companyName: Scalars['String'];
    designation: Scalars['String'];
    country: Scalars['String'];
    state: Scalars['String'];
    address: Scalars['String'];
    startDate: Scalars['Date'];
    endDate: Scalars['Date'];
}>;

export type UpdateWorkExperienceWithEndDateSecondMutation = {
    __typename?: 'RootMutation';
    userWorkExperience?: {
        __typename?: 'UserWorkExperienceMutationPayload';
        id?: number | null;
        user?: string | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteWorkExperienceMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteWorkExperienceMutation = {
    __typename?: 'RootMutation';
    userWorkExperienceDelete?: {
        __typename?: 'WorkExperienceDeleteMutation';
        ok?: boolean | null;
    } | null;
};

export type UseracademicRecordDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type UseracademicRecordDeleteMutation = {
    __typename?: 'RootMutation';
    academicRecordDelete?: {
        __typename?: 'AcademicRecordDeleteMutation';
        ok?: boolean | null;
    } | null;
};

export type UpdateUserAcademicInformationMutationVariables = Exact<{
    admitted: Scalars['Date'];
    school: Scalars['String'];
    graduated: Scalars['String'];
    program: Scalars['String'];
    discipline: Scalars['String'];
    current: Scalars['Boolean'];
    certificate: Scalars['Upload'];
}>;

export type UpdateUserAcademicInformationMutation = {
    __typename?: 'RootMutation';
    userAcademicInformation?: {
        __typename?: 'UserAcademicRecord';
        success?: boolean | null;
        errors?: string | null;
    } | null;
};

export type UpdateUserAcademicInformationWithoutDisMutationVariables = Exact<{
    admitted: Scalars['Date'];
    school: Scalars['String'];
    graduated: Scalars['String'];
    program: Scalars['String'];
    current?: InputMaybe<Scalars['Boolean']>;
    certificate?: InputMaybe<Scalars['Upload']>;
}>;

export type UpdateUserAcademicInformationWithoutDisMutation = {
    __typename?: 'RootMutation';
    userAcademicInformation?: {
        __typename?: 'UserAcademicRecord';
        success?: boolean | null;
        errors?: string | null;
    } | null;
};

export type UpdateUserAcademicInformationEditMutationVariables = Exact<{
    id: Scalars['ID'];
    admitted: Scalars['Date'];
    school: Scalars['String'];
    discipline: Scalars['String'];
    graduated: Scalars['String'];
    program: Scalars['String'];
    current: Scalars['Boolean'];
    certificate: Scalars['Upload'];
}>;

export type UpdateUserAcademicInformationEditMutation = {
    __typename?: 'RootMutation';
    userAcademicInformation?: {
        __typename?: 'UserAcademicRecord';
        success?: boolean | null;
        errors?: string | null;
    } | null;
};

export type JoinOrgMutationMutationVariables = Exact<{
    org_id: Scalars['String'];
    user_id: Scalars['String'];
    approved?: InputMaybe<Scalars['Boolean']>;
    coren_number: Scalars['String'];
    org_number: Scalars['String'];
    nse_number: Scalars['String'];
    new_or_old: Scalars['String'];
    membership_cadre_id?: InputMaybe<Scalars['String']>;
    specialty?: InputMaybe<Scalars['String']>;
    sub_specialty?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
}>;

export type JoinOrgMutationMutation = {
    __typename?: 'RootMutation';
    joinOrganization?: {
        __typename?: 'JoinOrganizationMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type JoinOrgMutationUpdateMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    org_id: Scalars['String'];
    user_id: Scalars['String'];
    approved?: InputMaybe<Scalars['Boolean']>;
    coren_number: Scalars['String'];
    org_number: Scalars['String'];
    nse_number: Scalars['String'];
    new_or_old: Scalars['String'];
    referee_one_number?: InputMaybe<Scalars['String']>;
    referee_one_name?: InputMaybe<Scalars['String']>;
    referee_two_number?: InputMaybe<Scalars['String']>;
    referee_two_name?: InputMaybe<Scalars['String']>;
    referee_three_number?: InputMaybe<Scalars['String']>;
    referee_three_name?: InputMaybe<Scalars['String']>;
}>;

export type JoinOrgMutationUpdateMutation = {
    __typename?: 'RootMutation';
    joinOrganization?: {
        __typename?: 'JoinOrganizationMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type NullifyMemberOutstandingDataMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    user_id: Scalars['String'];
    amount_owing: Scalars['Float'];
    amount_owing_reason: Scalars['String'];
}>;

export type NullifyMemberOutstandingDataMutation = {
    __typename?: 'RootMutation';
    joinOrganization?: {
        __typename?: 'JoinOrganizationMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type ConferenceRegistrationMutationPayloadMutationVariables = Exact<{
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    ticket?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['String']>;
}>;

export type ConferenceRegistrationMutationPayloadMutation = {
    __typename?: 'RootMutation';
    conferenceRegistration?: {
        __typename?: 'ConferenceRegistrationMutationPayload';
        id?: number | null;
        email?: string | null;
        firstName?: string | null;
        middleName?: string | null;
        lastName?: string | null;
        user?: string | null;
        event?: string | null;
        ticket?: string | null;
        organization?: string | null;
        clientMutationId?: string | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type ConferencePageQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type ConferencePageQueryQuery = {
    __typename?: 'RootQuery';
    eventByDomainName?: {
        __typename?: 'MeetingType';
        id: string;
        name: string;
        description?: string | null;
        venue?: string | null;
        theme?: string | null;
        startDate: any;
        endDate?: any | null;
        startTime: any;
        endTime?: any | null;
        invitationLetter?: string | null;
        photoUrl?: string | null;
        domainName?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            id: string;
            pk: string;
            name: string;
            about?: string | null;
            twitter?: string | null;
            facebook?: string | null;
            linkedin?: string | null;
            abbrev: string;
            photoUrl?: string | null;
            flutterwaveSubaccountId?: string | null;
        } | null;
        meetingSponsor: {
            __typename?: 'SponsorTypeConnection';
            edges: Array<{
                __typename?: 'SponsorTypeEdge';
                node?: {
                    __typename?: 'SponsorType';
                    id: string;
                    name?: string | null;
                    logoUrl?: string | null;
                } | null;
            } | null>;
        };
        eventTicket: {
            __typename?: 'TicketTypeConnection';
            edges: Array<{
                __typename?: 'TicketTypeEdge';
                node?: {
                    __typename?: 'TicketType';
                    id: string;
                    name: string;
                    earlyBirdFeeCurrency: string;
                    earlyBirdDeadline?: any | null;
                    lateBirdFeeCurrency: string;
                    lateBirdFee?: string | null;
                    earlyBirdFee?: string | null;
                } | null;
            } | null>;
        };
        paperMeetings: {
            __typename?: 'PresentationTypeConnection';
            edges: Array<{
                __typename?: 'PresentationTypeEdge';
                node?: {
                    __typename?: 'PresentationType';
                    title: string;
                    abstract: string;
                    file: string;
                    externalUpload?: string | null;
                } | null;
            } | null>;
        };
    } | null;
};

export type OrgSubDivisionQueryQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type OrgSubDivisionQueryQuery = {
    __typename?: 'RootQuery';
    orgSubDivisionList?: {
        __typename?: 'OrgSubDivisionTypeConnection';
        edges: Array<{
            __typename?: 'OrgSubDivisionTypeEdge';
            node?: {
                __typename?: 'OrgSubDivisionType';
                pk: string;
                chairperson?: string | null;
                email?: string | null;
                subdivision: string;
                phoneNumber?: string | null;
                state?: string | null;
                meetingDaysTime?: string | null;
                meetingVenue?: string | null;
                dateOfInauguration?: any | null;
            } | null;
        } | null>;
    } | null;
};

export type WebsiteQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsiteQueryQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        id: string;
        primaryColor?: string | null;
        webLogo?: string | null;
        bannerLogo?: string | null;
        headerTitle?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        bodyFont?: string | null;
        org?: { __typename?: 'OrganizationType'; id: string; pk: string; name: string } | null;
    } | null;
};

export type WebsiteMembershipTypesQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsiteMembershipTypesQuery = {
    __typename?: 'RootQuery';
    websiteMembershipTypes?: Array<{
        __typename?: 'OrgMembershipType';
        id: string;
        name: string;
        membershipFeeValue?: number | null;
        membershipFeeStr?: string | null;
        membershipRenewalFeeValue?: number | null;
        membershipRenewalFeeStr?: string | null;
        description?: string | null;
    } | null> | null;
};

export type TicketTypeConnectionQueryVariables = Exact<{
    org_Id: Scalars['Float'];
}>;

export type TicketTypeConnectionQuery = {
    __typename?: 'RootQuery';
    eventTicketList?: {
        __typename?: 'TicketTypeConnection';
        totalCount?: number | null;
        edgeCount?: number | null;
        edges: Array<{
            __typename?: 'TicketTypeEdge';
            node?: {
                __typename?: 'TicketType';
                id: string;
                pk?: string | null;
                name: string;
                earlyBirdFee?: string | null;
                earlyBirdDeadline?: any | null;
                lateBirdFee?: string | null;
                earlyBirdFeeCurrency: string;
                lateBirdFeeCurrency: string;
                earlyBirdFeeValue?: number | null;
                lateBirdFeeValue?: number | null;
                earlyBirdFeeStr?: string | null;
                lateBirdFeeStr?: string | null;
                org?: {
                    __typename?: 'OrganizationType';
                    id: string;
                    pk: string;
                    name: string;
                } | null;
                meeting?: {
                    __typename?: 'MeetingType';
                    id: string;
                    pk: string;
                    name: string;
                } | null;
            } | null;
        } | null>;
    } | null;
};

export type SpecialtyTypeConnectionQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
}>;

export type SpecialtyTypeConnectionQuery = {
    __typename?: 'RootQuery';
    specialties?: {
        __typename?: 'SpecialtyTypeConnection';
        edges: Array<{
            __typename?: 'SpecialtyTypeEdge';
            node?: {
                __typename?: 'SpecialtyType';
                id: string;
                pk: string;
                name?: string | null;
                organization?: { __typename?: 'OrganizationType'; id: string; name: string } | null;
                subspecialtySet: {
                    __typename?: 'SubSpecialtyTypeConnection';
                    edges: Array<{
                        __typename?: 'SubSpecialtyTypeEdge';
                        node?: {
                            __typename?: 'SubSpecialtyType';
                            id: string;
                            pk: string;
                            name?: string | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};

export type MembershipPaymentQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type MembershipPaymentQueryQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            pk: string;
            id: string;
            name: string;
            abbrev: string;
            about?: string | null;
            email?: string | null;
            officeAddress?: string | null;
            phone?: string | null;
            flutterwaveSubaccountId?: string | null;
            sponsorSet: {
                __typename?: 'SponsorTypeConnection';
                edges: Array<{
                    __typename?: 'SponsorTypeEdge';
                    node?: {
                        __typename?: 'SponsorType';
                        name?: string | null;
                        logoUrl?: string | null;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
    websiteMembershipTypes?: Array<{
        __typename?: 'OrgMembershipType';
        id: string;
        name: string;
        membershipFeeValue?: number | null;
        membershipFeeStr?: string | null;
        membershipRenewalFeeValue?: number | null;
        membershipRenewalFeeStr?: string | null;
        description?: string | null;
    } | null> | null;
    user?: {
        __typename?: 'UserType';
        id: string;
        pk: string;
        username: string;
        firstName: string;
        lastName: string;
        bio?: string | null;
        dob?: any | null;
        qrCodeFile?: string | null;
        phone?: string | null;
        confirmedEmail?: boolean | null;
        gender?: AccountsUserGenderChoices | null;
        address?: string | null;
        postal?: string | null;
        photo?: string | null;
        socialAuthPhotoUrl?: string | null;
        dateJoined: any;
        isActive: boolean;
    } | null;
};

export type AllDataQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type AllDataQueryQuery = {
    __typename?: 'RootQuery';
    orgConference?: {
        __typename?: 'MeetingType';
        name: string;
        theme?: string | null;
        venue?: string | null;
        description?: string | null;
        startDate: any;
        endDate?: any | null;
        photoUrl?: string | null;
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        id: string;
        primaryColor?: string | null;
        webLogo?: string | null;
        bannerLogo?: string | null;
        webLogoUrl?: string | null;
        bannerLogoUrl?: string | null;
        headerTitle?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        bodyFont?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            id: string;
            pk: string;
            name: string;
            abbrev: string;
            about?: string | null;
            email?: string | null;
            officeAddress?: string | null;
            phone?: string | null;
            sponsorSet: {
                __typename?: 'SponsorTypeConnection';
                edges: Array<{
                    __typename?: 'SponsorTypeEdge';
                    node?: {
                        __typename?: 'SponsorType';
                        name?: string | null;
                        logoUrl?: string | null;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
    websiteBannerSliderImages?: {
        __typename?: 'WebsiteBannerSliderImageTypeConnection';
        edges: Array<{
            __typename?: 'WebsiteBannerSliderImageTypeEdge';
            node?: {
                __typename?: 'WebsiteBannerSliderImageType';
                id: string;
                bannerTitle?: string | null;
                bannerSubtitle?: string | null;
                bannerBgImage?: string | null;
                bannerBgImageUrl?: string | null;
            } | null;
        } | null>;
    } | null;
    threeTopmostEvents?: Array<{
        __typename?: 'MeetingType';
        name: string;
        url?: string | null;
        theme?: string | null;
        description?: string | null;
        venue?: string | null;
        startDate: any;
        startTime: any;
        flyer?: string | null;
        photoUrl?: string | null;
    } | null> | null;
};

export type LeaderDataQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type LeaderDataQuery = {
    __typename?: 'RootQuery';
    orgExecutive?: {
        __typename?: 'ExecutiveType';
        name?: string | null;
        bio?: string | null;
        photo?: string | null;
        photoUrl?: string | null;
        startTenure?: any | null;
        endTenure?: any | null;
        facebook?: string | null;
        email?: string | null;
        position?: {
            __typename?: 'LeadershipPositionType';
            rank: number;
            job?: string | null;
            position: string;
        } | null;
    } | null;
};

export type AllDashBoardQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type AllDashBoardQueryQuery = {
    __typename?: 'RootQuery';
    allOrganizationAnnouncements?: Array<{
        __typename?: 'AnnouncementType';
        title: string;
        body?: string | null;
        updated: any;
        photoUrl?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            photoUrl?: string | null;
            name: string;
            abbrev: string;
        } | null;
    } | null> | null;
    allOrganizationUpcomingEvents?: Array<{
        __typename?: 'MeetingType';
        name: string;
        description?: string | null;
        theme?: string | null;
        photoUrl?: string | null;
        url?: string | null;
        startDate: any;
        org?: {
            __typename?: 'OrganizationType';
            photoUrl?: string | null;
            name: string;
            abbrev: string;
        } | null;
    } | null> | null;
    allOrganizationEvents?: Array<{
        __typename?: 'MeetingType';
        name: string;
        description?: string | null;
        theme?: string | null;
        url?: string | null;
        photoUrl?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            photoUrl?: string | null;
            name: string;
            abbrev: string;
        } | null;
    } | null> | null;
    websiteMembershipTypes?: Array<{
        __typename?: 'OrgMembershipType';
        name: string;
        membershipFeeValue?: number | null;
        membershipFeeStr?: string | null;
        description?: string | null;
    } | null> | null;
    user?: {
        __typename?: 'UserType';
        id: string;
        pk: string;
        username: string;
        firstName: string;
        lastName: string;
        bio?: string | null;
        dob?: any | null;
        qrCodeFile?: string | null;
        phone?: string | null;
        confirmedEmail?: boolean | null;
        gender?: AccountsUserGenderChoices | null;
        address?: string | null;
        postal?: string | null;
        socialAuthPhotoUrl?: string | null;
        photoUrl?: string | null;
        dateJoined: any;
        isActive: boolean;
        photo?: string | null;
        records: {
            __typename?: 'AcademicRecordModelTypeConnection';
            edges: Array<{
                __typename?: 'AcademicRecordModelTypeEdge';
                node?: {
                    __typename?: 'AcademicRecordModelType';
                    pk: string;
                    program: string;
                    admitted?: any | null;
                    graduated?: any | null;
                    current?: boolean | null;
                    certificate?: string | null;
                    school: { __typename?: 'SchoolModelType'; name: string };
                    discipline?: { __typename?: 'DepartmentModelType'; name: string } | null;
                } | null;
            } | null>;
        };
        workexperienceSet: {
            __typename?: 'WorkExperienceModelTypeConnection';
            edges: Array<{
                __typename?: 'WorkExperienceModelTypeEdge';
                node?: {
                    __typename?: 'WorkExperienceModelType';
                    id: string;
                    pk: string;
                    companyName?: string | null;
                    designation?: string | null;
                    description?: string | null;
                    current?: boolean | null;
                    state?: string | null;
                    country?: string | null;
                    address?: string | null;
                    startDate: any;
                    endDate?: any | null;
                } | null;
            } | null>;
        };
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; abbrev: string } | null;
    } | null;
};

export type DashboardAllEventsDatasQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type DashboardAllEventsDatasQuery = {
    __typename?: 'RootQuery';
    allOrganizationEvents?: Array<{
        __typename?: 'MeetingType';
        name: string;
        url?: string | null;
        description?: string | null;
        theme?: string | null;
        photoUrl?: string | null;
        startDate: any;
        org?: {
            __typename?: 'OrganizationType';
            photoUrl?: string | null;
            name: string;
            abbrev: string;
        } | null;
    } | null> | null;
    user?: {
        __typename?: 'UserType';
        id: string;
        pk: string;
        username: string;
        firstName: string;
        lastName: string;
        bio?: string | null;
        dob?: any | null;
        qrCodeFile?: string | null;
        phone?: string | null;
        confirmedEmail?: boolean | null;
        gender?: AccountsUserGenderChoices | null;
        address?: string | null;
        postal?: string | null;
        socialAuthPhotoUrl?: string | null;
        photoUrl?: string | null;
        dateJoined: any;
        isActive: boolean;
        photo?: string | null;
        records: {
            __typename?: 'AcademicRecordModelTypeConnection';
            edges: Array<{
                __typename?: 'AcademicRecordModelTypeEdge';
                node?: {
                    __typename?: 'AcademicRecordModelType';
                    program: string;
                    admitted?: any | null;
                    graduated?: any | null;
                    school: { __typename?: 'SchoolModelType'; name: string };
                    discipline?: { __typename?: 'DepartmentModelType'; name: string } | null;
                } | null;
            } | null>;
        };
        workexperienceSet: {
            __typename?: 'WorkExperienceModelTypeConnection';
            edges: Array<{
                __typename?: 'WorkExperienceModelTypeEdge';
                node?: {
                    __typename?: 'WorkExperienceModelType';
                    id: string;
                    companyName?: string | null;
                    designation?: string | null;
                    startDate: any;
                    endDate?: any | null;
                } | null;
            } | null>;
        };
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            abbrev: string;
            sponsorSet: {
                __typename?: 'SponsorTypeConnection';
                edges: Array<{
                    __typename?: 'SponsorTypeEdge';
                    node?: {
                        __typename?: 'SponsorType';
                        name?: string | null;
                        logoUrl?: string | null;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
};

export type DashboardAllEventsDataListQueryVariables = Exact<{
    domain_name: Scalars['String'];
    org_Id?: InputMaybe<Scalars['Float']>;
}>;

export type DashboardAllEventsDataListQuery = {
    __typename?: 'RootQuery';
    eventCategoryList?: {
        __typename?: 'MeetingCategoryTypeConnection';
        edges: Array<{
            __typename?: 'MeetingCategoryTypeEdge';
            node?: {
                __typename?: 'MeetingCategoryType';
                id: string;
                name: string;
                pk?: string | null;
                description?: string | null;
                org?: { __typename?: 'OrganizationType'; id: string; name: string } | null;
                meetingSet: {
                    __typename?: 'MeetingTypeConnection';
                    totalCount?: number | null;
                    edges: Array<{
                        __typename?: 'MeetingTypeEdge';
                        node?: {
                            __typename?: 'MeetingType';
                            id: string;
                            name: string;
                            description?: string | null;
                            url?: string | null;
                            photoUrl?: string | null;
                            pk: string;
                            startDate: any;
                            theme?: string | null;
                            org?: {
                                __typename?: 'OrganizationType';
                                pk: string;
                                id: string;
                                photoUrl?: string | null;
                                name: string;
                                abbrev: string;
                            } | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            abbrev: string;
            sponsorSet: {
                __typename?: 'SponsorTypeConnection';
                edges: Array<{
                    __typename?: 'SponsorTypeEdge';
                    node?: {
                        __typename?: 'SponsorType';
                        name?: string | null;
                        logoUrl?: string | null;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
};

export type DashboardAccountDataQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type DashboardAccountDataQuery = {
    __typename?: 'RootQuery';
    user?: {
        __typename: 'UserType';
        id: string;
        pk: string;
        username: string;
        firstName: string;
        lastName: string;
        bio?: string | null;
        dob?: any | null;
        qrCodeFile?: string | null;
        phone?: string | null;
        confirmedEmail?: boolean | null;
        gender?: AccountsUserGenderChoices | null;
        address?: string | null;
        postal?: string | null;
        socialAuthPhotoUrl?: string | null;
        photoUrl?: string | null;
        dateJoined: any;
        isActive: boolean;
        photo?: string | null;
        records: {
            __typename?: 'AcademicRecordModelTypeConnection';
            edges: Array<{
                __typename?: 'AcademicRecordModelTypeEdge';
                node?: {
                    __typename?: 'AcademicRecordModelType';
                    program: string;
                    admitted?: any | null;
                    graduated?: any | null;
                    school: { __typename?: 'SchoolModelType'; name: string };
                    discipline?: { __typename?: 'DepartmentModelType'; name: string } | null;
                } | null;
            } | null>;
        };
        workexperienceSet: {
            __typename?: 'WorkExperienceModelTypeConnection';
            edges: Array<{
                __typename?: 'WorkExperienceModelTypeEdge';
                node?: {
                    __typename?: 'WorkExperienceModelType';
                    id: string;
                    companyName?: string | null;
                    designation?: string | null;
                    startDate: any;
                    endDate?: any | null;
                } | null;
            } | null>;
        };
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; abbrev: string } | null;
    } | null;
};

export type DashboardLayoutDataQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type DashboardLayoutDataQuery = {
    __typename?: 'RootQuery';
    user?: {
        __typename?: 'UserType';
        id: string;
        pk: string;
        firstName: string;
        lastName: string;
        photoUrl?: string | null;
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string; abbrev: string } | null;
    } | null;
};

export type WebsitePaymentApiQueryQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type WebsitePaymentApiQueryQuery = {
    __typename?: 'RootQuery';
    websitePaymentApi?: {
        __typename?: 'OrganizationPaymentAPITypeConnection';
        edges: Array<{
            __typename?: 'OrganizationPaymentAPITypeEdge';
            node?: {
                __typename?: 'OrganizationPaymentAPIType';
                pk: string;
                platform?: string | null;
                testPublicKey?: string | null;
                livePublicKey?: string | null;
            } | null;
        } | null>;
    } | null;
};

export type GetDirectorsQueryQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type GetDirectorsQueryQuery = {
    __typename?: 'RootQuery';
    orgLeadershipCategoryList?: {
        __typename?: 'LeadershipCategoryTypeConnection';
        edges: Array<{
            __typename?: 'LeadershipCategoryTypeEdge';
            node?: {
                __typename?: 'LeadershipCategoryType';
                name: string;
                executiveSet: {
                    __typename?: 'ExecutiveTypeConnection';
                    edges: Array<{
                        __typename?: 'ExecutiveTypeEdge';
                        node?: {
                            __typename?: 'ExecutiveType';
                            pk: string;
                            id: string;
                            name?: string | null;
                            bio?: string | null;
                            photoUrl?: string | null;
                            position?: {
                                __typename?: 'LeadershipPositionType';
                                position: string;
                            } | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};

export type DashboardLayoutDataMembershipQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type DashboardLayoutDataMembershipQuery = {
    __typename?: 'RootQuery';
    websiteMembershipTypes?: Array<{
        __typename?: 'OrgMembershipType';
        id: string;
        name: string;
        membershipFeeValue?: number | null;
        membershipFeeStr?: string | null;
        description?: string | null;
    } | null> | null;
    user?: {
        __typename?: 'UserType';
        id: string;
        pk: string;
        username: string;
        firstName: string;
        lastName: string;
        photoUrl?: string | null;
        email: string;
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string; abbrev: string } | null;
    } | null;
};

export type WebsiteFaqTypeQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type WebsiteFaqTypeQuery = {
    __typename?: 'RootQuery';
    websiteFaqList?: {
        __typename?: 'WebsiteFaqTypeConnection';
        edges: Array<{
            __typename?: 'WebsiteFaqTypeEdge';
            node?: {
                __typename?: 'WebsiteFaqType';
                id: string;
                question?: string | null;
                answer?: string | null;
                created: any;
                updated: any;
            } | null;
        } | null>;
    } | null;
};

export type OrgSubDivisionQueriesQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type OrgSubDivisionQueriesQuery = {
    __typename?: 'RootQuery';
    orgSubDivisionList?: {
        __typename?: 'OrgSubDivisionTypeConnection';
        edges: Array<{
            __typename?: 'OrgSubDivisionTypeEdge';
            node?: {
                __typename?: 'OrgSubDivisionType';
                pk: string;
                chairperson?: string | null;
                email?: string | null;
                subdivision: string;
                phoneNumber?: string | null;
                state?: string | null;
                meetingDaysTime?: string | null;
                meetingVenue?: string | null;
                dateOfInauguration?: any | null;
            } | null;
        } | null>;
    } | null;
};

export type OrgSubDivisionsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type OrgSubDivisionsQueryQuery = {
    __typename?: 'RootQuery';
    orgSubDivision?: {
        __typename?: 'OrgSubDivisionType';
        pk: string;
        chairperson?: string | null;
        email?: string | null;
        subdivision: string;
        phoneNumber?: string | null;
        state?: string | null;
        meetingDaysTime?: string | null;
        meetingVenue?: string | null;
        dateOfInauguration?: any | null;
    } | null;
};

export type WebsitePublicationsQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsitePublicationsQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string } | null;
    } | null;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
    __typename?: 'RootQuery';
    user?: { __typename?: 'UserType'; id: string; username: string } | null;
};

export type WebsiteAboutPagesQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsiteAboutPagesQuery = {
    __typename?: 'RootQuery';
    websiteAboutPage?: Array<string | null> | null;
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
    } | null;
};

export type WebsiteAboutQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsiteAboutQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string } | null;
    } | null;
};

export type ContactUsPageQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type ContactUsPageQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            pk: string;
            officeAddress?: string | null;
            email?: string | null;
            phone?: string | null;
        } | null;
    } | null;
};

export type RegistersPageQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type RegistersPageQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string } | null;
    } | null;
};

export type WebsiteColorDataQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsiteColorDataQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        secondaryColor?: string | null;
        primaryTextColor?: string | null;
        secondaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryBtnColor?: string | null;
        primaryBgColor?: string | null;
        secondaryBgColor?: string | null;
        webLogoUrl?: string | null;
    } | null;
};

export type RegisterPageQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type RegisterPageQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string } | null;
    } | null;
};

export type WebsiteEventDetailQueryVariables = Exact<{
    event_slug: Scalars['String'];
}>;

export type WebsiteEventDetailQuery = {
    __typename?: 'RootQuery';
    eventBySlug?: {
        __typename?: 'MeetingType';
        name: string;
        venue?: string | null;
        theme?: string | null;
        description?: string | null;
        attendance: boolean;
        startDate: any;
        endDate?: any | null;
        endTime?: any | null;
        minutes?: string | null;
        photoUrl?: string | null;
        paid: boolean;
        eventState: string;
        url?: string | null;
        onlineMeetingLink?: string | null;
        eventTicket: {
            __typename?: 'TicketTypeConnection';
            edges: Array<{
                __typename?: 'TicketTypeEdge';
                node?: {
                    __typename?: 'TicketType';
                    id: string;
                    name: string;
                    earlyBirdFee?: string | null;
                    earlyBirdDeadline?: any | null;
                } | null;
            } | null>;
        };
        mainEvent?: { __typename?: 'MeetingType'; theme?: string | null } | null;
        org?: { __typename?: 'OrganizationType'; name: string } | null;
        scheduleMeetings: {
            __typename?: 'ScheduleTypeConnection';
            edges: Array<{
                __typename?: 'ScheduleTypeEdge';
                node?: {
                    __typename?: 'ScheduleType';
                    title: string;
                    description?: string | null;
                    scheduleEndTime?: any | null;
                    scheduleDate?: any | null;
                    scheduleStartTime?: any | null;
                    speaker?: {
                        __typename?: 'PresenterType';
                        name?: string | null;
                        photoUrl?: string | null;
                        bio?: string | null;
                        person?: {
                            __typename?: 'UserType';
                            firstName: string;
                            lastName: string;
                            email: string;
                        } | null;
                        presentationSet: {
                            __typename?: 'PresentationTypeConnection';
                            edges: Array<{
                                __typename?: 'PresentationTypeEdge';
                                node?: {
                                    __typename?: 'PresentationType';
                                    meeting?: {
                                        __typename?: 'MeetingType';
                                        name: string;
                                        theme?: string | null;
                                    } | null;
                                } | null;
                            } | null>;
                        };
                    } | null;
                    meeting?: {
                        __typename?: 'MeetingType';
                        name: string;
                        venue?: string | null;
                        mainEvent?: {
                            __typename?: 'MeetingType';
                            name: string;
                            venue?: string | null;
                            theme?: string | null;
                            flyer?: string | null;
                        } | null;
                    } | null;
                } | null;
            } | null>;
        };
        presenterMeetings: {
            __typename?: 'PresenterTypeConnection';
            edges: Array<{
                __typename?: 'PresenterTypeEdge';
                node?: {
                    __typename?: 'PresenterType';
                    name?: string | null;
                    photoUrl?: string | null;
                    bio?: string | null;
                } | null;
            } | null>;
        };
        meetingSet: {
            __typename?: 'MeetingTypeConnection';
            edges: Array<{
                __typename?: 'MeetingTypeEdge';
                node?: { __typename?: 'MeetingType'; name: string; theme?: string | null } | null;
            } | null>;
        };
        meetingSponsor: {
            __typename?: 'SponsorTypeConnection';
            edges: Array<{
                __typename?: 'SponsorTypeEdge';
                node?: {
                    __typename?: 'SponsorType';
                    name?: string | null;
                    logoUrl?: string | null;
                } | null;
            } | null>;
        };
    } | null;
};

export type WebsitesQueryQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type WebsitesQueryQuery = {
    __typename?: 'RootQuery';
    orgSubDivisionList?: {
        __typename?: 'OrgSubDivisionTypeConnection';
        edges: Array<{
            __typename?: 'OrgSubDivisionTypeEdge';
            node?: {
                __typename?: 'OrgSubDivisionType';
                pk: string;
                chairperson?: string | null;
                email?: string | null;
                subdivision: string;
            } | null;
        } | null>;
    } | null;
};

export type WebsitePaymentListQueryVariables = Exact<{
    orgId: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type WebsitePaymentListQuery = {
    __typename?: 'RootQuery';
    membershipPaymentList?: {
        __typename?: 'MembershipPaymentTypeConnection';
        edges: Array<{
            __typename?: 'MembershipPaymentTypeEdge';
            node?: {
                __typename?: 'MembershipPaymentType';
                id: string;
                pk: string;
                paymentDate?: any | null;
                paymentType: string;
                txref?: string | null;
                amountPaidValue?: number | null;
                membershipType?: { __typename?: 'OrgMembershipType'; name: string } | null;
                org?: {
                    __typename?: 'OrganizationType';
                    name: string;
                    myOrg: {
                        __typename?: 'JoinRequestTypeConnection';
                        edges: Array<{
                            __typename?: 'JoinRequestTypeEdge';
                            node?: {
                                __typename?: 'JoinRequestType';
                                amountOwing?: any | null;
                            } | null;
                        } | null>;
                    };
                } | null;
            } | null;
        } | null>;
    } | null;
};

export type WebsitePublicationCategoryListQueryVariables = Exact<{
    orgId: Scalars['Float'];
    domain_name: Scalars['String'];
}>;

export type WebsitePublicationCategoryListQuery = {
    __typename?: 'RootQuery';
    publicationCategoryList?: {
        __typename?: 'PublicationCategoryTypeConnection';
        edges: Array<{
            __typename?: 'PublicationCategoryTypeEdge';
            node?: {
                __typename?: 'PublicationCategoryType';
                id: string;
                name: string;
                publicationSet: {
                    __typename?: 'PublicationTypeConnection';
                    edges: Array<{
                        __typename?: 'PublicationTypeEdge';
                        node?: {
                            __typename?: 'PublicationType';
                            title: string;
                            abstract: string;
                            fileUrl?: string | null;
                            externalUpload?: string | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};

export type JoinRequestTypeQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type JoinRequestTypeQuery = {
    __typename?: 'RootQuery';
    member?: {
        __typename?: 'JoinRequestType';
        id: string;
        pk?: string | null;
        paymentName?: string | null;
        amountOwingReason?: string | null;
        amountOwingValue?: number | null;
        amountOwingStr?: string | null;
        membershipCadre?: {
            __typename?: 'OrgMembershipType';
            id: string;
            name: string;
            description?: string | null;
        } | null;
    } | null;
};
