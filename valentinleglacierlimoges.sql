--
-- PostgreSQL database dump
--

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-05-12 18:07:55

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 24587)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 5177 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 24589)
-- Name: admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admins (
    id_admin bigint NOT NULL,
    nom text,
    email text,
    mot_de_passe text,
    actif bigint DEFAULT '1'::bigint,
    date_creation text DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.admins OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 24597)
-- Name: admins_id_admin_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admins_id_admin_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admins_id_admin_seq OWNER TO postgres;

--
-- TOC entry 5179 (class 0 OID 0)
-- Dependencies: 220
-- Name: admins_id_admin_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admins_id_admin_seq OWNED BY public.admins.id_admin;


--
-- TOC entry 221 (class 1259 OID 24598)
-- Name: boissons_nom; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.boissons_nom (
    id_boisson bigint NOT NULL,
    nom_boisson text,
    actif bigint DEFAULT '1'::bigint,
    id_type bigint
);


ALTER TABLE public.boissons_nom OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 24605)
-- Name: boissons_nom_id_boisson_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.boissons_nom_id_boisson_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.boissons_nom_id_boisson_seq OWNER TO postgres;

--
-- TOC entry 5180 (class 0 OID 0)
-- Dependencies: 222
-- Name: boissons_nom_id_boisson_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.boissons_nom_id_boisson_seq OWNED BY public.boissons_nom.id_boisson;


--
-- TOC entry 223 (class 1259 OID 24606)
-- Name: boissons_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.boissons_type (
    id_type bigint NOT NULL,
    nom_type text,
    ordre_affichage integer DEFAULT 1
);


ALTER TABLE public.boissons_type OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 24613)
-- Name: boissons_type_id_type_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.boissons_type_id_type_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.boissons_type_id_type_seq OWNER TO postgres;

--
-- TOC entry 5181 (class 0 OID 0)
-- Dependencies: 224
-- Name: boissons_type_id_type_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.boissons_type_id_type_seq OWNED BY public.boissons_type.id_type;


--
-- TOC entry 225 (class 1259 OID 24614)
-- Name: buches; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.buches (
    id_buche bigint NOT NULL,
    nom_buche text,
    actif bigint DEFAULT '1'::bigint
);


ALTER TABLE public.buches OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 24621)
-- Name: buches_id_buche_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.buches_id_buche_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.buches_id_buche_seq OWNER TO postgres;

--
-- TOC entry 5182 (class 0 OID 0)
-- Dependencies: 226
-- Name: buches_id_buche_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.buches_id_buche_seq OWNED BY public.buches.id_buche;


--
-- TOC entry 227 (class 1259 OID 24622)
-- Name: configuration_site; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.configuration_site (
    cle text NOT NULL,
    valeur text
);


ALTER TABLE public.configuration_site OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 24628)
-- Name: glaces_parfums; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.glaces_parfums (
    id_glace bigint NOT NULL,
    nom_glace text,
    id_type bigint,
    bio bigint DEFAULT '1'::bigint,
    actif bigint DEFAULT '1'::bigint
);


ALTER TABLE public.glaces_parfums OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 24636)
-- Name: glaces_parfums_id_glace_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.glaces_parfums_id_glace_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.glaces_parfums_id_glace_seq OWNER TO postgres;

--
-- TOC entry 5183 (class 0 OID 0)
-- Dependencies: 229
-- Name: glaces_parfums_id_glace_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.glaces_parfums_id_glace_seq OWNED BY public.glaces_parfums.id_glace;


--
-- TOC entry 230 (class 1259 OID 24637)
-- Name: glaces_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.glaces_type (
    id_type bigint NOT NULL,
    nom_type text
);


ALTER TABLE public.glaces_type OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 24643)
-- Name: glaces_type_id_type_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.glaces_type_id_type_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.glaces_type_id_type_seq OWNER TO postgres;

--
-- TOC entry 5184 (class 0 OID 0)
-- Dependencies: 231
-- Name: glaces_type_id_type_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.glaces_type_id_type_seq OWNED BY public.glaces_type.id_type;


--
-- TOC entry 232 (class 1259 OID 24644)
-- Name: gourmandises_garnitures; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gourmandises_garnitures (
    id_garniture bigint NOT NULL,
    nom_garniture text
);


ALTER TABLE public.gourmandises_garnitures OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 24650)
-- Name: gourmandises_garnitures_id_garniture_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gourmandises_garnitures_id_garniture_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gourmandises_garnitures_id_garniture_seq OWNER TO postgres;

--
-- TOC entry 5185 (class 0 OID 0)
-- Dependencies: 233
-- Name: gourmandises_garnitures_id_garniture_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gourmandises_garnitures_id_garniture_seq OWNED BY public.gourmandises_garnitures.id_garniture;


--
-- TOC entry 234 (class 1259 OID 24651)
-- Name: gourmandises_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gourmandises_type (
    id_gourmandise_type bigint NOT NULL,
    nom_gourmandise_type text,
    actif bigint DEFAULT '0'::bigint
);


ALTER TABLE public.gourmandises_type OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 24658)
-- Name: gourmandises_type_garnitures; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gourmandises_type_garnitures (
    id_liaison bigint NOT NULL,
    id_gourmandise_type bigint,
    id_garniture bigint,
    actif bigint
);


ALTER TABLE public.gourmandises_type_garnitures OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 24662)
-- Name: gourmandises_type_garnitures_id_liaison_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gourmandises_type_garnitures_id_liaison_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gourmandises_type_garnitures_id_liaison_seq OWNER TO postgres;

--
-- TOC entry 5186 (class 0 OID 0)
-- Dependencies: 236
-- Name: gourmandises_type_garnitures_id_liaison_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gourmandises_type_garnitures_id_liaison_seq OWNED BY public.gourmandises_type_garnitures.id_liaison;


--
-- TOC entry 237 (class 1259 OID 24663)
-- Name: gourmandises_type_id_gourmandise_type_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gourmandises_type_id_gourmandise_type_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gourmandises_type_id_gourmandise_type_seq OWNER TO postgres;

--
-- TOC entry 5187 (class 0 OID 0)
-- Dependencies: 237
-- Name: gourmandises_type_id_gourmandise_type_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gourmandises_type_id_gourmandise_type_seq OWNED BY public.gourmandises_type.id_gourmandise_type;


--
-- TOC entry 238 (class 1259 OID 24664)
-- Name: granites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.granites (
    id_granite bigint NOT NULL,
    nom_granite text,
    actif bigint DEFAULT '1'::bigint
);


ALTER TABLE public.granites OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 24671)
-- Name: granites_id_granite_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.granites_id_granite_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.granites_id_granite_seq OWNER TO postgres;

--
-- TOC entry 5188 (class 0 OID 0)
-- Dependencies: 239
-- Name: granites_id_granite_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.granites_id_granite_seq OWNED BY public.granites.id_granite;


--
-- TOC entry 240 (class 1259 OID 24672)
-- Name: italiennes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.italiennes (
    id_italienne bigint NOT NULL,
    id_machine bigint,
    id_parfum_italienne bigint,
    actif bigint DEFAULT '1'::bigint
);


ALTER TABLE public.italiennes OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 24677)
-- Name: italiennes_id_italienne_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.italiennes_id_italienne_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.italiennes_id_italienne_seq OWNER TO postgres;

--
-- TOC entry 5189 (class 0 OID 0)
-- Dependencies: 241
-- Name: italiennes_id_italienne_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.italiennes_id_italienne_seq OWNED BY public.italiennes.id_italienne;


--
-- TOC entry 242 (class 1259 OID 24678)
-- Name: machines_italiennes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.machines_italiennes (
    id_machine bigint NOT NULL,
    nom_machine text,
    actif bigint DEFAULT 1
);


ALTER TABLE public.machines_italiennes OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 24685)
-- Name: machines_italiennes_id_machine_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.machines_italiennes_id_machine_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.machines_italiennes_id_machine_seq OWNER TO postgres;

--
-- TOC entry 5190 (class 0 OID 0)
-- Dependencies: 243
-- Name: machines_italiennes_id_machine_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.machines_italiennes_id_machine_seq OWNED BY public.machines_italiennes.id_machine;


--
-- TOC entry 244 (class 1259 OID 24686)
-- Name: parfums_italiennes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parfums_italiennes (
    id_parfum_italienne bigint NOT NULL,
    nom_parfum_italienne text,
    bio bigint DEFAULT '1'::bigint
);


ALTER TABLE public.parfums_italiennes OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 24693)
-- Name: parfums_italiennes_id_parfum_italienne_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.parfums_italiennes_id_parfum_italienne_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.parfums_italiennes_id_parfum_italienne_seq OWNER TO postgres;

--
-- TOC entry 5191 (class 0 OID 0)
-- Dependencies: 245
-- Name: parfums_italiennes_id_parfum_italienne_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.parfums_italiennes_id_parfum_italienne_seq OWNED BY public.parfums_italiennes.id_parfum_italienne;


--
-- TOC entry 246 (class 1259 OID 24694)
-- Name: sections_accueil; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sections_accueil (
    id_section bigint NOT NULL,
    periode text,
    code_section text,
    actif bigint DEFAULT '1'::bigint,
    ordre bigint
);


ALTER TABLE public.sections_accueil OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 24701)
-- Name: sections_accueil_id_section_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sections_accueil_id_section_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sections_accueil_id_section_seq OWNER TO postgres;

--
-- TOC entry 5192 (class 0 OID 0)
-- Dependencies: 247
-- Name: sections_accueil_id_section_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sections_accueil_id_section_seq OWNED BY public.sections_accueil.id_section;


--
-- TOC entry 4925 (class 2604 OID 24702)
-- Name: admins id_admin; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins ALTER COLUMN id_admin SET DEFAULT nextval('public.admins_id_admin_seq'::regclass);


--
-- TOC entry 4928 (class 2604 OID 24703)
-- Name: boissons_nom id_boisson; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_nom ALTER COLUMN id_boisson SET DEFAULT nextval('public.boissons_nom_id_boisson_seq'::regclass);


--
-- TOC entry 4930 (class 2604 OID 24704)
-- Name: boissons_type id_type; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_type ALTER COLUMN id_type SET DEFAULT nextval('public.boissons_type_id_type_seq'::regclass);


--
-- TOC entry 4932 (class 2604 OID 24705)
-- Name: buches id_buche; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buches ALTER COLUMN id_buche SET DEFAULT nextval('public.buches_id_buche_seq'::regclass);


--
-- TOC entry 4934 (class 2604 OID 24706)
-- Name: glaces_parfums id_glace; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.glaces_parfums ALTER COLUMN id_glace SET DEFAULT nextval('public.glaces_parfums_id_glace_seq'::regclass);


--
-- TOC entry 4937 (class 2604 OID 24707)
-- Name: glaces_type id_type; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.glaces_type ALTER COLUMN id_type SET DEFAULT nextval('public.glaces_type_id_type_seq'::regclass);


--
-- TOC entry 4938 (class 2604 OID 24708)
-- Name: gourmandises_garnitures id_garniture; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_garnitures ALTER COLUMN id_garniture SET DEFAULT nextval('public.gourmandises_garnitures_id_garniture_seq'::regclass);


--
-- TOC entry 4939 (class 2604 OID 24709)
-- Name: gourmandises_type id_gourmandise_type; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type ALTER COLUMN id_gourmandise_type SET DEFAULT nextval('public.gourmandises_type_id_gourmandise_type_seq'::regclass);


--
-- TOC entry 4941 (class 2604 OID 24710)
-- Name: gourmandises_type_garnitures id_liaison; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type_garnitures ALTER COLUMN id_liaison SET DEFAULT nextval('public.gourmandises_type_garnitures_id_liaison_seq'::regclass);


--
-- TOC entry 4942 (class 2604 OID 24711)
-- Name: granites id_granite; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.granites ALTER COLUMN id_granite SET DEFAULT nextval('public.granites_id_granite_seq'::regclass);


--
-- TOC entry 4944 (class 2604 OID 24712)
-- Name: italiennes id_italienne; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.italiennes ALTER COLUMN id_italienne SET DEFAULT nextval('public.italiennes_id_italienne_seq'::regclass);


--
-- TOC entry 4946 (class 2604 OID 24713)
-- Name: machines_italiennes id_machine; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.machines_italiennes ALTER COLUMN id_machine SET DEFAULT nextval('public.machines_italiennes_id_machine_seq'::regclass);


--
-- TOC entry 4948 (class 2604 OID 24714)
-- Name: parfums_italiennes id_parfum_italienne; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parfums_italiennes ALTER COLUMN id_parfum_italienne SET DEFAULT nextval('public.parfums_italiennes_id_parfum_italienne_seq'::regclass);


--
-- TOC entry 4950 (class 2604 OID 24715)
-- Name: sections_accueil id_section; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections_accueil ALTER COLUMN id_section SET DEFAULT nextval('public.sections_accueil_id_section_seq'::regclass);


--
-- TOC entry 5143 (class 0 OID 24589)
-- Dependencies: 219
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admins (id_admin, nom, email, mot_de_passe, actif, date_creation) FROM stdin;
1	Admin	admin@valentin-glacier.fr	motdepasse_a_modifier	1	2026-04-06 14:33:49
2	Deborah	deborah@zohomail.com	$2b$10$2foV2b7cQCY14/EQCsrGienZO5tnXgnov7Fuh.vbF21lYMuGzs5qu	1	2026-04-14 13:18:11
3	valentin-le-glacier	valentinleglacier@orange.fr	$2b$10$P5fGqAJn28MvBKc9UNmqIe2M.wGSfxsLsHMtHS1DrfXG1JWkYOQWy	1	2026-04-14 13:18:11
\.


--
-- TOC entry 5145 (class 0 OID 24598)
-- Dependencies: 221
-- Data for Name: boissons_nom; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.boissons_nom (id_boisson, nom_boisson, actif, id_type) FROM stdin;
2	Café au lait	1	1
3	Cappuccino	1	1
4	Café viennois	1	1
12	Thé vert BIO	1	2
13	Framboiz'in'	1	2
14	Eau minérale (50 cl)	1	2
15	Perrier nature/citron (33 cl)	1	2
11	Fizz BIO	1	2
10	Nectars BIO	1	2
1	Expresso ou allongé	1	1
5	Affogato	1	1
6	Thé, infusion	1	1
7	Chocolat chaud	1	1
8	Chocolat viennois	1	1
9	Jus de fruits BIO	1	2
\.


--
-- TOC entry 5147 (class 0 OID 24606)
-- Dependencies: 223
-- Data for Name: boissons_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.boissons_type (id_type, nom_type, ordre_affichage) FROM stdin;
2	Boissons fraîches	2
1	Boissons chaudes	1
\.


--
-- TOC entry 5149 (class 0 OID 24614)
-- Dependencies: 225
-- Data for Name: buches; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.buches (id_buche, nom_buche, actif) FROM stdin;
1	test fraise	1
2	test peche	1
3	test pistache	0
4	test poire	1
5	test marron	1
\.


--
-- TOC entry 5151 (class 0 OID 24622)
-- Dependencies: 227
-- Data for Name: configuration_site; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.configuration_site (cle, valeur) FROM stdin;
periode_accueil	ete
\.


--
-- TOC entry 5152 (class 0 OID 24628)
-- Dependencies: 228
-- Data for Name: glaces_parfums; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.glaces_parfums (id_glace, nom_glace, id_type, bio, actif) FROM stdin;
1	Abricot	2	1	1
2	Amande	1	1	0
6	Bergamote	1	1	0
7	Cacahuète	1	1	1
8	Cacao orange	2	1	0
9	Café	1	1	1
10	Cannelle	1	1	0
11	Caramel	1	1	0
12	Cardamome	1	1	0
13	Cassis	2	1	0
14	Cerise amarena	1	0	0
15	Chataîgne	2	1	0
16	Chicorée	1	1	0
17	Chocolat au lait	2	1	0
18	Chocolat noir	2	1	0
19	Citron	2	1	0
20	Citron Basilic	2	1	0
21	Citron vert	2	1	0
22	Citron vert menthe	2	1	0
23	Citronnelle fleur de Pois	2	1	1
24	Coing	2	1	0
25	Cookies	1	1	0
26	Féve de tonka	1	1	0
27	Fleur d'oranger	1	1	0
28	Foin	1	1	0
29	Fraise	2	1	1
30	Framboise	2	1	0
31	Fromage de chèvre	1	1	0
32	Gingembre	1	1	0
33	Groseille	2	1	1
36	Lavande	1	1	0
37	Litchi	2	1	0
38	Main de bouddha	1	1	0
39	Mangue	2	1	0
40	Melon	2	1	1
41	Menthe feuille	1	1	1
42	Menthe choco	1	1	1
46	Noix	2	1	1
47	Noix de coco	2	1	1
48	Orange sanguine	2	1	1
49	Pain d'épices	1	1	1
50	Passion	2	1	1
51	Pastèque	2	1	1
52	Pastis	2	1	1
53	Pêche blanche	2	1	1
54	Pêche de vigne	2	1	1
55	Pistache grillées	1	1	1
56	Plombière	1	1	1
57	Poire	2	1	1
58	Pomelo	2	1	1
59	Réglisse	1	1	1
60	Rhubarbe	2	1	1
61	Rhum raisin	1	1	1
62	Rose	2	1	1
63	Sésame noir	1	1	1
64	Spéculoos	1	1	1
65	Stracciatella	1	1	1
66	Sureau (fleur)	1	1	1
67	Thé vert matcha	1	1	1
68	Thym citron	2	1	1
69	Tiramisu	1	1	1
70	Vanille gousse	1	1	1
71	Vanille végétale	1	1	1
72	Verveine feuille	1	1	1
74	Yaourt	1	1	1
75	Yaourt au timut	1	1	1
35	Kumquat	2	1	1
34	Hibiscus	2	1	0
3	Ananas	2	1	1
5	Banane	2	1	1
73	Violette	1	0	0
45	Noisette	1	1	0
43	Miel romarin	1	1	1
\.


--
-- TOC entry 5154 (class 0 OID 24637)
-- Dependencies: 230
-- Data for Name: glaces_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.glaces_type (id_type, nom_type) FROM stdin;
1	creme
2	sorbet
\.


--
-- TOC entry 5156 (class 0 OID 24644)
-- Dependencies: 232
-- Data for Name: gourmandises_garnitures; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gourmandises_garnitures (id_garniture, nom_garniture) FROM stdin;
1	Nature
2	Chantilly maison
3	Pâte à tartiner bio
4	Boule de glace
5	Nutella
6	Sauce chocolat maison
7	Sauce caramel
8	Miel artisanal
\.


--
-- TOC entry 5158 (class 0 OID 24651)
-- Dependencies: 234
-- Data for Name: gourmandises_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gourmandises_type (id_gourmandise_type, nom_gourmandise_type, actif) FROM stdin;
1	Gaufre	1
2	Crêpe	0
\.


--
-- TOC entry 5159 (class 0 OID 24658)
-- Dependencies: 235
-- Data for Name: gourmandises_type_garnitures; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gourmandises_type_garnitures (id_liaison, id_gourmandise_type, id_garniture, actif) FROM stdin;
13	2	7	1
14	2	8	1
8	2	2	1
9	2	3	1
7	2	1	1
10	2	4	1
11	2	5	1
12	2	6	1
1	1	1	1
2	1	2	1
3	1	3	1
4	1	4	1
5	1	5	1
6	1	6	1
\.


--
-- TOC entry 5162 (class 0 OID 24664)
-- Dependencies: 238
-- Data for Name: granites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.granites (id_granite, nom_granite, actif) FROM stdin;
2	Provencale	1
3	Menthe	1
4	Citron	1
1	Grenadine	1
5	Cassis	1
6	Pomme-framboise	0
7	Pêche	1
\.


--
-- TOC entry 5164 (class 0 OID 24672)
-- Dependencies: 240
-- Data for Name: italiennes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.italiennes (id_italienne, id_machine, id_parfum_italienne, actif) FROM stdin;
8	2	4	1
6	2	3	1
10	2	5	0
9	1	5	0
5	1	3	0
1	1	1	1
2	2	1	0
4	2	2	0
7	1	4	0
3	1	2	1
\.


--
-- TOC entry 5166 (class 0 OID 24678)
-- Dependencies: 242
-- Data for Name: machines_italiennes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.machines_italiennes (id_machine, nom_machine, actif) FROM stdin;
2	Machine 2	0
1	Machine 1	1
\.


--
-- TOC entry 5168 (class 0 OID 24686)
-- Dependencies: 244
-- Data for Name: parfums_italiennes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.parfums_italiennes (id_parfum_italienne, nom_parfum_italienne, bio) FROM stdin;
1	Vanille	1
2	Fraise	1
3	Mangue	1
4	Cassis	1
5	Citron	1
\.


--
-- TOC entry 5170 (class 0 OID 24694)
-- Dependencies: 246
-- Data for Name: sections_accueil; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sections_accueil (id_section, periode, code_section, actif, ordre) FROM stdin;
1	normal	histoire	0	1
2	normal	parfums	0	2
3	normal	gourmandises	0	3
4	normal	boissons	0	4
5	ete	histoire	0	1
6	ete	parfums	0	2
7	ete	supplements_ete	0	3
8	ete	gourmandises	0	5
9	ete	boissons	0	4
10	hiver	histoire	1	1
11	hiver	parfums	1	2
12	hiver	buches	1	3
13	hiver	gourmandises	1	4
14	hiver	boissons	1	5
\.


--
-- TOC entry 5193 (class 0 OID 0)
-- Dependencies: 220
-- Name: admins_id_admin_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admins_id_admin_seq', 3, true);


--
-- TOC entry 5194 (class 0 OID 0)
-- Dependencies: 222
-- Name: boissons_nom_id_boisson_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.boissons_nom_id_boisson_seq', 15, true);


--
-- TOC entry 5195 (class 0 OID 0)
-- Dependencies: 224
-- Name: boissons_type_id_type_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.boissons_type_id_type_seq', 2, true);


--
-- TOC entry 5196 (class 0 OID 0)
-- Dependencies: 226
-- Name: buches_id_buche_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.buches_id_buche_seq', 5, true);


--
-- TOC entry 5197 (class 0 OID 0)
-- Dependencies: 229
-- Name: glaces_parfums_id_glace_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.glaces_parfums_id_glace_seq', 75, true);


--
-- TOC entry 5198 (class 0 OID 0)
-- Dependencies: 231
-- Name: glaces_type_id_type_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.glaces_type_id_type_seq', 2, true);


--
-- TOC entry 5199 (class 0 OID 0)
-- Dependencies: 233
-- Name: gourmandises_garnitures_id_garniture_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gourmandises_garnitures_id_garniture_seq', 8, true);


--
-- TOC entry 5200 (class 0 OID 0)
-- Dependencies: 236
-- Name: gourmandises_type_garnitures_id_liaison_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gourmandises_type_garnitures_id_liaison_seq', 14, true);


--
-- TOC entry 5201 (class 0 OID 0)
-- Dependencies: 237
-- Name: gourmandises_type_id_gourmandise_type_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gourmandises_type_id_gourmandise_type_seq', 2, true);


--
-- TOC entry 5202 (class 0 OID 0)
-- Dependencies: 239
-- Name: granites_id_granite_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.granites_id_granite_seq', 7, true);


--
-- TOC entry 5203 (class 0 OID 0)
-- Dependencies: 241
-- Name: italiennes_id_italienne_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.italiennes_id_italienne_seq', 10, true);


--
-- TOC entry 5204 (class 0 OID 0)
-- Dependencies: 243
-- Name: machines_italiennes_id_machine_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.machines_italiennes_id_machine_seq', 2, true);


--
-- TOC entry 5205 (class 0 OID 0)
-- Dependencies: 245
-- Name: parfums_italiennes_id_parfum_italienne_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.parfums_italiennes_id_parfum_italienne_seq', 5, true);


--
-- TOC entry 5206 (class 0 OID 0)
-- Dependencies: 247
-- Name: sections_accueil_id_section_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sections_accueil_id_section_seq', 14, true);


--
-- TOC entry 4953 (class 2606 OID 24717)
-- Name: admins idx_16390_admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT idx_16390_admins_pkey PRIMARY KEY (id_admin);


--
-- TOC entry 4984 (class 2606 OID 24719)
-- Name: machines_italiennes idx_16399_machines_italiennes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.machines_italiennes
    ADD CONSTRAINT idx_16399_machines_italiennes_pkey PRIMARY KEY (id_machine);


--
-- TOC entry 4987 (class 2606 OID 24721)
-- Name: parfums_italiennes idx_16406_parfums_italiennes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parfums_italiennes
    ADD CONSTRAINT idx_16406_parfums_italiennes_pkey PRIMARY KEY (id_parfum_italienne);


--
-- TOC entry 4978 (class 2606 OID 24723)
-- Name: granites idx_16414_granites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.granites
    ADD CONSTRAINT idx_16414_granites_pkey PRIMARY KEY (id_granite);


--
-- TOC entry 4980 (class 2606 OID 24725)
-- Name: italiennes idx_16422_italiennes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.italiennes
    ADD CONSTRAINT idx_16422_italiennes_pkey PRIMARY KEY (id_italienne);


--
-- TOC entry 4960 (class 2606 OID 24727)
-- Name: buches idx_16428_buches_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buches
    ADD CONSTRAINT idx_16428_buches_pkey PRIMARY KEY (id_buche);


--
-- TOC entry 4989 (class 2606 OID 24729)
-- Name: sections_accueil idx_16436_sections_accueil_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections_accueil
    ADD CONSTRAINT idx_16436_sections_accueil_pkey PRIMARY KEY (id_section);


--
-- TOC entry 4963 (class 2606 OID 24731)
-- Name: configuration_site idx_16443_sqlite_autoindex_configuration_site_1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configuration_site
    ADD CONSTRAINT idx_16443_sqlite_autoindex_configuration_site_1 PRIMARY KEY (cle);


--
-- TOC entry 4967 (class 2606 OID 24733)
-- Name: glaces_type idx_16449_glaces_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.glaces_type
    ADD CONSTRAINT idx_16449_glaces_type_pkey PRIMARY KEY (id_type);


--
-- TOC entry 4965 (class 2606 OID 24735)
-- Name: glaces_parfums idx_16456_glaces_parfums_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.glaces_parfums
    ADD CONSTRAINT idx_16456_glaces_parfums_pkey PRIMARY KEY (id_glace);


--
-- TOC entry 4973 (class 2606 OID 24737)
-- Name: gourmandises_type idx_16465_gourmandises_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type
    ADD CONSTRAINT idx_16465_gourmandises_type_pkey PRIMARY KEY (id_gourmandise_type);


--
-- TOC entry 4976 (class 2606 OID 24739)
-- Name: gourmandises_type_garnitures idx_16473_gourmandises_type_garnitures_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type_garnitures
    ADD CONSTRAINT idx_16473_gourmandises_type_garnitures_pkey PRIMARY KEY (id_liaison);


--
-- TOC entry 4970 (class 2606 OID 24741)
-- Name: gourmandises_garnitures idx_16478_gourmandises_garnitures_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_garnitures
    ADD CONSTRAINT idx_16478_gourmandises_garnitures_pkey PRIMARY KEY (id_garniture);


--
-- TOC entry 4956 (class 2606 OID 24743)
-- Name: boissons_nom idx_16485_boissons_nom_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_nom
    ADD CONSTRAINT idx_16485_boissons_nom_pkey PRIMARY KEY (id_boisson);


--
-- TOC entry 4958 (class 2606 OID 24745)
-- Name: boissons_type idx_16493_boissons_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_type
    ADD CONSTRAINT idx_16493_boissons_type_pkey PRIMARY KEY (id_type);


--
-- TOC entry 4982 (class 2606 OID 24747)
-- Name: italiennes unique_machine_parfum; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.italiennes
    ADD CONSTRAINT unique_machine_parfum UNIQUE (id_machine, id_parfum_italienne);


--
-- TOC entry 4954 (class 1259 OID 24748)
-- Name: idx_16390_sqlite_autoindex_admins_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16390_sqlite_autoindex_admins_1 ON public.admins USING btree (email);


--
-- TOC entry 4985 (class 1259 OID 24749)
-- Name: idx_16399_sqlite_autoindex_machines_italiennes_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16399_sqlite_autoindex_machines_italiennes_1 ON public.machines_italiennes USING btree (nom_machine);


--
-- TOC entry 4961 (class 1259 OID 24750)
-- Name: idx_16428_sqlite_autoindex_buches_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16428_sqlite_autoindex_buches_1 ON public.buches USING btree (nom_buche);


--
-- TOC entry 4990 (class 1259 OID 24751)
-- Name: idx_16436_sqlite_autoindex_sections_accueil_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16436_sqlite_autoindex_sections_accueil_1 ON public.sections_accueil USING btree (periode, code_section);


--
-- TOC entry 4968 (class 1259 OID 24752)
-- Name: idx_16449_sqlite_autoindex_glaces_type_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16449_sqlite_autoindex_glaces_type_1 ON public.glaces_type USING btree (nom_type);


--
-- TOC entry 4974 (class 1259 OID 24753)
-- Name: idx_16465_sqlite_autoindex_gourmandises_type_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16465_sqlite_autoindex_gourmandises_type_1 ON public.gourmandises_type USING btree (nom_gourmandise_type);


--
-- TOC entry 4971 (class 1259 OID 24754)
-- Name: idx_16478_sqlite_autoindex_gourmandises_garnitures_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16478_sqlite_autoindex_gourmandises_garnitures_1 ON public.gourmandises_garnitures USING btree (nom_garniture);


--
-- TOC entry 4991 (class 2606 OID 24755)
-- Name: boissons_nom boissons_nom_id_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_nom
    ADD CONSTRAINT boissons_nom_id_type_fkey FOREIGN KEY (id_type) REFERENCES public.boissons_type(id_type);


--
-- TOC entry 4992 (class 2606 OID 24760)
-- Name: gourmandises_type_garnitures gourmandises_type_garnitures_id_garniture_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type_garnitures
    ADD CONSTRAINT gourmandises_type_garnitures_id_garniture_fkey FOREIGN KEY (id_garniture) REFERENCES public.gourmandises_garnitures(id_garniture);


--
-- TOC entry 4993 (class 2606 OID 24765)
-- Name: gourmandises_type_garnitures gourmandises_type_garnitures_id_gourmandise_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type_garnitures
    ADD CONSTRAINT gourmandises_type_garnitures_id_gourmandise_type_fkey FOREIGN KEY (id_gourmandise_type) REFERENCES public.gourmandises_type(id_gourmandise_type);


--
-- TOC entry 4994 (class 2606 OID 24770)
-- Name: italiennes italiennes_id_machine_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.italiennes
    ADD CONSTRAINT italiennes_id_machine_fkey FOREIGN KEY (id_machine) REFERENCES public.machines_italiennes(id_machine);


--
-- TOC entry 4995 (class 2606 OID 24775)
-- Name: italiennes italiennes_id_parfum_italienne_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.italiennes
    ADD CONSTRAINT italiennes_id_parfum_italienne_fkey FOREIGN KEY (id_parfum_italienne) REFERENCES public.parfums_italiennes(id_parfum_italienne);


--
-- TOC entry 5178 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


-- Completed on 2026-05-12 18:07:56

--
-- PostgreSQL database dump complete
--


