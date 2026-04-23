--
-- PostgreSQL database dump
--

\restrict MI7N9tNdHz4saNJ69dpjFkdFddo3ICxQUndXByGOkQ91PPmyQtgz1dw9puS8zNJ

-- Dumped from database version 16.13 (Ubuntu 16.13-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.13 (Ubuntu 16.13-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
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
-- Name: admins_id_admin_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admins_id_admin_seq OWNED BY public.admins.id_admin;


--
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
-- Name: boissons_nom_id_boisson_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.boissons_nom_id_boisson_seq OWNED BY public.boissons_nom.id_boisson;


--
-- Name: boissons_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.boissons_type (
    id_type bigint NOT NULL,
    nom_type text
);


ALTER TABLE public.boissons_type OWNER TO postgres;

--
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
-- Name: boissons_type_id_type_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.boissons_type_id_type_seq OWNED BY public.boissons_type.id_type;


--
-- Name: buches; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.buches (
    id_buche bigint NOT NULL,
    nom_buche text,
    actif bigint DEFAULT '1'::bigint
);


ALTER TABLE public.buches OWNER TO postgres;

--
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
-- Name: buches_id_buche_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.buches_id_buche_seq OWNED BY public.buches.id_buche;


--
-- Name: configuration_site; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.configuration_site (
    cle text NOT NULL,
    valeur text
);


ALTER TABLE public.configuration_site OWNER TO postgres;

--
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
-- Name: glaces_parfums_id_glace_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.glaces_parfums_id_glace_seq OWNED BY public.glaces_parfums.id_glace;


--
-- Name: glaces_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.glaces_type (
    id_type bigint NOT NULL,
    nom_type text
);


ALTER TABLE public.glaces_type OWNER TO postgres;

--
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
-- Name: glaces_type_id_type_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.glaces_type_id_type_seq OWNED BY public.glaces_type.id_type;


--
-- Name: gourmandises_garnitures; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gourmandises_garnitures (
    id_garniture bigint NOT NULL,
    nom_garniture text
);


ALTER TABLE public.gourmandises_garnitures OWNER TO postgres;

--
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
-- Name: gourmandises_garnitures_id_garniture_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gourmandises_garnitures_id_garniture_seq OWNED BY public.gourmandises_garnitures.id_garniture;


--
-- Name: gourmandises_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gourmandises_type (
    id_gourmandise_type bigint NOT NULL,
    nom_gourmandise_type text,
    actif bigint DEFAULT '0'::bigint
);


ALTER TABLE public.gourmandises_type OWNER TO postgres;

--
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
-- Name: gourmandises_type_garnitures_id_liaison_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gourmandises_type_garnitures_id_liaison_seq OWNED BY public.gourmandises_type_garnitures.id_liaison;


--
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
-- Name: gourmandises_type_id_gourmandise_type_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gourmandises_type_id_gourmandise_type_seq OWNED BY public.gourmandises_type.id_gourmandise_type;


--
-- Name: granites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.granites (
    id_granite bigint NOT NULL,
    nom_granite text,
    actif bigint DEFAULT '1'::bigint
);


ALTER TABLE public.granites OWNER TO postgres;

--
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
-- Name: granites_id_granite_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.granites_id_granite_seq OWNED BY public.granites.id_granite;


--
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
-- Name: italiennes_id_italienne_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.italiennes_id_italienne_seq OWNED BY public.italiennes.id_italienne;


--
-- Name: machines_italiennes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.machines_italiennes (
    id_machine bigint NOT NULL,
    nom_machine text
);


ALTER TABLE public.machines_italiennes OWNER TO postgres;

--
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
-- Name: machines_italiennes_id_machine_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.machines_italiennes_id_machine_seq OWNED BY public.machines_italiennes.id_machine;


--
-- Name: parfums_italiennes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parfums_italiennes (
    id_parfum_italienne bigint NOT NULL,
    nom_parfum_italienne text,
    bio bigint DEFAULT '1'::bigint
);


ALTER TABLE public.parfums_italiennes OWNER TO postgres;

--
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
-- Name: parfums_italiennes_id_parfum_italienne_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.parfums_italiennes_id_parfum_italienne_seq OWNED BY public.parfums_italiennes.id_parfum_italienne;


--
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
-- Name: sections_accueil_id_section_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sections_accueil_id_section_seq OWNED BY public.sections_accueil.id_section;


--
-- Name: admins id_admin; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins ALTER COLUMN id_admin SET DEFAULT nextval('public.admins_id_admin_seq'::regclass);


--
-- Name: boissons_nom id_boisson; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_nom ALTER COLUMN id_boisson SET DEFAULT nextval('public.boissons_nom_id_boisson_seq'::regclass);


--
-- Name: boissons_type id_type; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_type ALTER COLUMN id_type SET DEFAULT nextval('public.boissons_type_id_type_seq'::regclass);


--
-- Name: buches id_buche; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buches ALTER COLUMN id_buche SET DEFAULT nextval('public.buches_id_buche_seq'::regclass);


--
-- Name: glaces_parfums id_glace; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.glaces_parfums ALTER COLUMN id_glace SET DEFAULT nextval('public.glaces_parfums_id_glace_seq'::regclass);


--
-- Name: glaces_type id_type; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.glaces_type ALTER COLUMN id_type SET DEFAULT nextval('public.glaces_type_id_type_seq'::regclass);


--
-- Name: gourmandises_garnitures id_garniture; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_garnitures ALTER COLUMN id_garniture SET DEFAULT nextval('public.gourmandises_garnitures_id_garniture_seq'::regclass);


--
-- Name: gourmandises_type id_gourmandise_type; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type ALTER COLUMN id_gourmandise_type SET DEFAULT nextval('public.gourmandises_type_id_gourmandise_type_seq'::regclass);


--
-- Name: gourmandises_type_garnitures id_liaison; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type_garnitures ALTER COLUMN id_liaison SET DEFAULT nextval('public.gourmandises_type_garnitures_id_liaison_seq'::regclass);


--
-- Name: granites id_granite; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.granites ALTER COLUMN id_granite SET DEFAULT nextval('public.granites_id_granite_seq'::regclass);


--
-- Name: italiennes id_italienne; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.italiennes ALTER COLUMN id_italienne SET DEFAULT nextval('public.italiennes_id_italienne_seq'::regclass);


--
-- Name: machines_italiennes id_machine; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.machines_italiennes ALTER COLUMN id_machine SET DEFAULT nextval('public.machines_italiennes_id_machine_seq'::regclass);


--
-- Name: parfums_italiennes id_parfum_italienne; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parfums_italiennes ALTER COLUMN id_parfum_italienne SET DEFAULT nextval('public.parfums_italiennes_id_parfum_italienne_seq'::regclass);


--
-- Name: sections_accueil id_section; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections_accueil ALTER COLUMN id_section SET DEFAULT nextval('public.sections_accueil_id_section_seq'::regclass);


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admins (id_admin, nom, email, mot_de_passe, actif, date_creation) FROM stdin;
1	Admin	admin@valentin-glacier.fr	motdepasse_a_modifier	1	2026-04-06 14:33:49
2	Deborah	deborah@zohomail.com	$2b$10$2foV2b7cQCY14/EQCsrGienZO5tnXgnov7Fuh.vbF21lYMuGzs5qu	1	2026-04-14 13:18:11
3	valentin-le-glacier	valentinleglacier@orange.fr	$2b$10$P5fGqAJn28MvBKc9UNmqIe2M.wGSfxsLsHMtHS1DrfXG1JWkYOQWy	1	2026-04-14 13:18:11
\.


--
-- Data for Name: boissons_nom; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.boissons_nom (id_boisson, nom_boisson, actif, id_type) FROM stdin;
1	Expresso ou allongé	1	1
2	Café au lait	1	1
3	Cappuccino	1	1
4	Café viennois	1	1
5	Affogato	1	1
6	Thé, infusion	1	1
7	Chocolat chaud	1	1
8	Chocolat viennois	1	1
9	Jus de fruits BIO	1	2
10	Nectars BIO	1	2
11	Fizz BIO	1	2
12	Thé vert BIO	1	2
13	Framboiz'in	1	2
14	Eau minérale (50 cl)	1	2
15	Perrier nature/citron (33 cl)	1	2
\.


--
-- Data for Name: boissons_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.boissons_type (id_type, nom_type) FROM stdin;
1	Boissons chaudes
2	Boissons fraîches
\.


--
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
-- Data for Name: configuration_site; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.configuration_site (cle, valeur) FROM stdin;
periode_accueil	ete
\.


--
-- Data for Name: glaces_parfums; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.glaces_parfums (id_glace, nom_glace, id_type, bio, actif) FROM stdin;
1	Abricot	2	1	1
2	Amande	1	1	0
3	Ananas	2	1	0
5	Banane	2	1	0
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
34	Hibiscus	2	1	1
35	Kumquat	2	1	1
36	Lavande	1	1	0
37	Litchi	2	1	0
38	Main de bouddha	1	1	0
39	Mangue	2	1	0
40	Melon	2	1	1
41	Menthe feuille	1	1	1
42	Menthe choco	1	1	1
43	Miel romarin	1	1	0
45	Noisette	1	1	1
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
73	Violette	1	0	1
74	Yaourt	1	1	1
75	Yaourt au timut	1	1	1
\.


--
-- Data for Name: glaces_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.glaces_type (id_type, nom_type) FROM stdin;
1	creme
2	sorbet
\.


--
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
-- Data for Name: gourmandises_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gourmandises_type (id_gourmandise_type, nom_gourmandise_type, actif) FROM stdin;
1	Gaufre	1
2	Crêpe	1
\.


--
-- Data for Name: gourmandises_type_garnitures; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gourmandises_type_garnitures (id_liaison, id_gourmandise_type, id_garniture, actif) FROM stdin;
1	1	1	1
2	1	2	1
3	1	3	1
4	1	4	1
5	1	5	1
6	1	6	1
11	2	5	1
12	2	6	1
13	2	7	1
14	2	8	1
7	2	1	1
8	2	2	1
9	2	3	1
10	2	4	1
\.


--
-- Data for Name: granites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.granites (id_granite, nom_granite, actif) FROM stdin;
1	Grenadine	1
2	Provencale	1
3	Menthe	0
4	Citron	0
5	cassis	0
6	pomme-framboise	0
7	pêche	0
\.


--
-- Data for Name: italiennes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.italiennes (id_italienne, id_machine, id_parfum_italienne, actif) FROM stdin;
1	1	1	1
2	2	3	1
\.


--
-- Data for Name: machines_italiennes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.machines_italiennes (id_machine, nom_machine) FROM stdin;
1	Machine 1
2	Machine 2
\.


--
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
-- Name: admins_id_admin_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admins_id_admin_seq', 3, true);


--
-- Name: boissons_nom_id_boisson_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.boissons_nom_id_boisson_seq', 15, true);


--
-- Name: boissons_type_id_type_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.boissons_type_id_type_seq', 2, true);


--
-- Name: buches_id_buche_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.buches_id_buche_seq', 5, true);


--
-- Name: glaces_parfums_id_glace_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.glaces_parfums_id_glace_seq', 75, true);


--
-- Name: glaces_type_id_type_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.glaces_type_id_type_seq', 2, true);


--
-- Name: gourmandises_garnitures_id_garniture_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gourmandises_garnitures_id_garniture_seq', 8, true);


--
-- Name: gourmandises_type_garnitures_id_liaison_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gourmandises_type_garnitures_id_liaison_seq', 14, true);


--
-- Name: gourmandises_type_id_gourmandise_type_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gourmandises_type_id_gourmandise_type_seq', 2, true);


--
-- Name: granites_id_granite_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.granites_id_granite_seq', 7, true);


--
-- Name: italiennes_id_italienne_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.italiennes_id_italienne_seq', 2, true);


--
-- Name: machines_italiennes_id_machine_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.machines_italiennes_id_machine_seq', 2, true);


--
-- Name: parfums_italiennes_id_parfum_italienne_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.parfums_italiennes_id_parfum_italienne_seq', 5, true);


--
-- Name: sections_accueil_id_section_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sections_accueil_id_section_seq', 14, true);


--
-- Name: admins idx_16390_admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT idx_16390_admins_pkey PRIMARY KEY (id_admin);


--
-- Name: machines_italiennes idx_16399_machines_italiennes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.machines_italiennes
    ADD CONSTRAINT idx_16399_machines_italiennes_pkey PRIMARY KEY (id_machine);


--
-- Name: parfums_italiennes idx_16406_parfums_italiennes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parfums_italiennes
    ADD CONSTRAINT idx_16406_parfums_italiennes_pkey PRIMARY KEY (id_parfum_italienne);


--
-- Name: granites idx_16414_granites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.granites
    ADD CONSTRAINT idx_16414_granites_pkey PRIMARY KEY (id_granite);


--
-- Name: italiennes idx_16422_italiennes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.italiennes
    ADD CONSTRAINT idx_16422_italiennes_pkey PRIMARY KEY (id_italienne);


--
-- Name: buches idx_16428_buches_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buches
    ADD CONSTRAINT idx_16428_buches_pkey PRIMARY KEY (id_buche);


--
-- Name: sections_accueil idx_16436_sections_accueil_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections_accueil
    ADD CONSTRAINT idx_16436_sections_accueil_pkey PRIMARY KEY (id_section);


--
-- Name: configuration_site idx_16443_sqlite_autoindex_configuration_site_1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configuration_site
    ADD CONSTRAINT idx_16443_sqlite_autoindex_configuration_site_1 PRIMARY KEY (cle);


--
-- Name: glaces_type idx_16449_glaces_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.glaces_type
    ADD CONSTRAINT idx_16449_glaces_type_pkey PRIMARY KEY (id_type);


--
-- Name: glaces_parfums idx_16456_glaces_parfums_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.glaces_parfums
    ADD CONSTRAINT idx_16456_glaces_parfums_pkey PRIMARY KEY (id_glace);


--
-- Name: gourmandises_type idx_16465_gourmandises_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type
    ADD CONSTRAINT idx_16465_gourmandises_type_pkey PRIMARY KEY (id_gourmandise_type);


--
-- Name: gourmandises_type_garnitures idx_16473_gourmandises_type_garnitures_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type_garnitures
    ADD CONSTRAINT idx_16473_gourmandises_type_garnitures_pkey PRIMARY KEY (id_liaison);


--
-- Name: gourmandises_garnitures idx_16478_gourmandises_garnitures_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_garnitures
    ADD CONSTRAINT idx_16478_gourmandises_garnitures_pkey PRIMARY KEY (id_garniture);


--
-- Name: boissons_nom idx_16485_boissons_nom_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_nom
    ADD CONSTRAINT idx_16485_boissons_nom_pkey PRIMARY KEY (id_boisson);


--
-- Name: boissons_type idx_16493_boissons_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_type
    ADD CONSTRAINT idx_16493_boissons_type_pkey PRIMARY KEY (id_type);


--
-- Name: idx_16390_sqlite_autoindex_admins_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16390_sqlite_autoindex_admins_1 ON public.admins USING btree (email);


--
-- Name: idx_16399_sqlite_autoindex_machines_italiennes_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16399_sqlite_autoindex_machines_italiennes_1 ON public.machines_italiennes USING btree (nom_machine);


--
-- Name: idx_16428_sqlite_autoindex_buches_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16428_sqlite_autoindex_buches_1 ON public.buches USING btree (nom_buche);


--
-- Name: idx_16436_sqlite_autoindex_sections_accueil_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16436_sqlite_autoindex_sections_accueil_1 ON public.sections_accueil USING btree (periode, code_section);


--
-- Name: idx_16449_sqlite_autoindex_glaces_type_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16449_sqlite_autoindex_glaces_type_1 ON public.glaces_type USING btree (nom_type);


--
-- Name: idx_16465_sqlite_autoindex_gourmandises_type_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16465_sqlite_autoindex_gourmandises_type_1 ON public.gourmandises_type USING btree (nom_gourmandise_type);


--
-- Name: idx_16478_sqlite_autoindex_gourmandises_garnitures_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_16478_sqlite_autoindex_gourmandises_garnitures_1 ON public.gourmandises_garnitures USING btree (nom_garniture);


--
-- Name: boissons_nom boissons_nom_id_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.boissons_nom
    ADD CONSTRAINT boissons_nom_id_type_fkey FOREIGN KEY (id_type) REFERENCES public.boissons_type(id_type);


--
-- Name: gourmandises_type_garnitures gourmandises_type_garnitures_id_garniture_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type_garnitures
    ADD CONSTRAINT gourmandises_type_garnitures_id_garniture_fkey FOREIGN KEY (id_garniture) REFERENCES public.gourmandises_garnitures(id_garniture);


--
-- Name: gourmandises_type_garnitures gourmandises_type_garnitures_id_gourmandise_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gourmandises_type_garnitures
    ADD CONSTRAINT gourmandises_type_garnitures_id_gourmandise_type_fkey FOREIGN KEY (id_gourmandise_type) REFERENCES public.gourmandises_type(id_gourmandise_type);


--
-- Name: italiennes italiennes_id_machine_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.italiennes
    ADD CONSTRAINT italiennes_id_machine_fkey FOREIGN KEY (id_machine) REFERENCES public.machines_italiennes(id_machine);


--
-- Name: italiennes italiennes_id_parfum_italienne_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.italiennes
    ADD CONSTRAINT italiennes_id_parfum_italienne_fkey FOREIGN KEY (id_parfum_italienne) REFERENCES public.parfums_italiennes(id_parfum_italienne);


--
-- PostgreSQL database dump complete
--

\unrestrict MI7N9tNdHz4saNJ69dpjFkdFddo3ICxQUndXByGOkQ91PPmyQtgz1dw9puS8zNJ

