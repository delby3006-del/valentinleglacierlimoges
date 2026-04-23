--
-- Fichier généré par SQLiteStudio v3.4.21 sur mar. avr. 14 11:14:01 2026
--
-- Encodage texte utilisé : System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Tableau : admins
CREATE TABLE IF NOT EXISTS admins (
    id_admin      INTEGER PRIMARY KEY AUTOINCREMENT,
    nom           TEXT    NOT NULL,
    email         TEXT    NOT NULL
                          UNIQUE,
    mot_de_passe  TEXT    NOT NULL,
    actif         INTEGER NOT NULL
                          DEFAULT 1
                          CHECK (actif IN (0, 1) ),
    date_creation TEXT    NOT NULL
                          DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO admins (
                       id_admin,
                       nom,
                       email,
                       mot_de_passe,
                       actif,
                       date_creation
                   )
                   VALUES (
                       1,
                       'Admin',
                       'admin@valentin-glacier.fr',
                       'motdepasse_a_modifier',
                       1,
                       '2026-04-06 14:33:49'
                   );


-- Tableau : buches
CREATE TABLE IF NOT EXISTS buches (
    id_buche  INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_buche TEXT    NOT NULL
                      UNIQUE,
    actif     INTEGER NOT NULL
                      DEFAULT 1
                      CHECK (actif IN (0, 1) ) 
);

INSERT INTO buches (
                       id_buche,
                       nom_buche,
                       actif
                   )
                   VALUES (
                       1,
                       'test fraise',
                       1
                   );

INSERT INTO buches (
                       id_buche,
                       nom_buche,
                       actif
                   )
                   VALUES (
                       2,
                       'test peche',
                       1
                   );

INSERT INTO buches (
                       id_buche,
                       nom_buche,
                       actif
                   )
                   VALUES (
                       3,
                       'test pistache',
                       0
                   );

INSERT INTO buches (
                       id_buche,
                       nom_buche,
                       actif
                   )
                   VALUES (
                       4,
                       'test poire',
                       1
                   );

INSERT INTO buches (
                       id_buche,
                       nom_buche,
                       actif
                   )
                   VALUES (
                       5,
                       'test marron',
                       1
                   );


-- Tableau : configuration_site
CREATE TABLE IF NOT EXISTS configuration_site (
    cle    TEXT PRIMARY KEY,
    valeur TEXT NOT NULL
);

INSERT INTO configuration_site (
                                   cle,
                                   valeur
                               )
                               VALUES (
                                   'periode_accueil',
                                   'ete'
                               );


-- Tableau : glaces
CREATE TABLE IF NOT EXISTS glaces (
    id_glace  INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_glace TEXT    NOT NULL,
    id_type   INTEGER NOT NULL,
    bio       INTEGER NOT NULL
                      DEFAULT 1
                      CHECK (bio IN (0, 1) ),
    actif     INTEGER NOT NULL
                      DEFAULT 1
                      CHECK (actif IN (0, 1) ),
    FOREIGN KEY (
        id_type
    )
    REFERENCES types (id_type) 
);

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       1,
                       'Abricot',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       2,
                       'Amande',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       3,
                       'Ananas',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       5,
                       'Banane',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       6,
                       'Bergamote',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       7,
                       'Cacahuète',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       8,
                       'Cacao orange',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       9,
                       'Café',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       10,
                       'Cannelle',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       11,
                       'Caramel',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       12,
                       'Cardamome',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       13,
                       'Cassis',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       14,
                       'Cerise amarena',
                       1,
                       0,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       15,
                       'Chataîgne',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       16,
                       'Chicorée',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       17,
                       'Chocolat au lait',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       18,
                       'Chocolat noir',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       19,
                       'Citron',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       20,
                       'Citron Basilic',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       21,
                       'Citron vert',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       22,
                       'Citron vert menthe',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       23,
                       'Citronnelle fleur de Pois',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       24,
                       'Coing',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       25,
                       'Cookies',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       26,
                       'Féve de tonka',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       27,
                       'Fleur d''oranger',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       28,
                       'Foin',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       29,
                       'Fraise',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       30,
                       'Framboise',
                       2,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       31,
                       'Fromage de chèvre',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       32,
                       'Gingembre',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       33,
                       'Groseille',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       34,
                       'Hibiscus',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       35,
                       'Kumquat',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       36,
                       'Lavande',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       37,
                       'Litchi',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       38,
                       'Main de bouddha',
                       1,
                       1,
                       0
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       39,
                       'Mangue',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       40,
                       'Melon',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       41,
                       'Menthe feuille',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       42,
                       'Menthe choco',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       43,
                       'Miel romarin',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       45,
                       'Noisette',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       46,
                       'Noix',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       47,
                       'Noix de coco',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       48,
                       'Orange sanguine',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       49,
                       'Pain d''épices',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       50,
                       'Passion',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       51,
                       'Pastèque',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       52,
                       'Pastis',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       53,
                       'Pêche blanche',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       54,
                       'Pêche de vigne',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       55,
                       'Pistache grillées',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       56,
                       'Plombière',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       57,
                       'Poire',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       58,
                       'Pomelo',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       59,
                       'Réglisse',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       60,
                       'Rhubarbe',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       61,
                       'Rhum raisin',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       62,
                       'Rose',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       63,
                       'Sésame noir',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       64,
                       'Spéculoos',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       65,
                       'Stracciatella',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       66,
                       'Sureau (fleur)',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       67,
                       'Thé vert matcha',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       68,
                       'Thym citron',
                       2,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       69,
                       'Tiramisu',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       70,
                       'Vanille gousse',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       71,
                       'Vanille végétale',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       72,
                       'Verveine feuille',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       73,
                       'Violette',
                       1,
                       0,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       74,
                       'Yaourt',
                       1,
                       1,
                       1
                   );

INSERT INTO glaces (
                       id_glace,
                       nom_glace,
                       id_type,
                       bio,
                       actif
                   )
                   VALUES (
                       75,
                       'Yaourt au timut',
                       1,
                       1,
                       1
                   );


-- Tableau : gourmandises
CREATE TABLE IF NOT EXISTS gourmandises (
    id_gourmandise  INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_gourmandise TEXT    NOT NULL
                            UNIQUE,
    actif           INTEGER NOT NULL
                            DEFAULT 1
                            CHECK (actif IN (0, 1) ) 
);

INSERT INTO gourmandises (
                             id_gourmandise,
                             nom_gourmandise,
                             actif
                         )
                         VALUES (
                             1,
                             'Gaufre',
                             1
                         );

INSERT INTO gourmandises (
                             id_gourmandise,
                             nom_gourmandise,
                             actif
                         )
                         VALUES (
                             2,
                             'Crepe',
                             1
                         );


-- Tableau : granites
CREATE TABLE IF NOT EXISTS granites (
    id_granite  INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_granite TEXT    NOT NULL,
    actif       INTEGER NOT NULL
                        DEFAULT 1
                        CHECK (actif IN (0, 1) ) 
);

INSERT INTO granites (
                         id_granite,
                         nom_granite,
                         actif
                     )
                     VALUES (
                         1,
                         'Grenadine',
                         1
                     );

INSERT INTO granites (
                         id_granite,
                         nom_granite,
                         actif
                     )
                     VALUES (
                         2,
                         'Provencale',
                         1
                     );

INSERT INTO granites (
                         id_granite,
                         nom_granite,
                         actif
                     )
                     VALUES (
                         3,
                         'Menthe',
                         0
                     );

INSERT INTO granites (
                         id_granite,
                         nom_granite,
                         actif
                     )
                     VALUES (
                         4,
                         'Citron',
                         0
                     );

INSERT INTO granites (
                         id_granite,
                         nom_granite,
                         actif
                     )
                     VALUES (
                         5,
                         'cassis',
                         0
                     );

INSERT INTO granites (
                         id_granite,
                         nom_granite,
                         actif
                     )
                     VALUES (
                         6,
                         'pomme-framboise',
                         0
                     );

INSERT INTO granites (
                         id_granite,
                         nom_granite,
                         actif
                     )
                     VALUES (
                         7,
                         'pêche',
                         0
                     );


-- Tableau : italiennes
CREATE TABLE IF NOT EXISTS italiennes (
    id_italienne        INTEGER PRIMARY KEY AUTOINCREMENT,
    id_machine          INTEGER NOT NULL,
    id_parfum_italienne INTEGER NOT NULL,
    actif               INTEGER NOT NULL
                                DEFAULT 1
                                CHECK (actif IN (0, 1) ),
    FOREIGN KEY (
        id_machine
    )
    REFERENCES machines_italiennes (id_machine),
    FOREIGN KEY (
        id_parfum_italienne
    )
    REFERENCES parfums_italiennes (id_parfum_italienne) 
);

INSERT INTO italiennes (
                           id_italienne,
                           id_machine,
                           id_parfum_italienne,
                           actif
                       )
                       VALUES (
                           1,
                           1,
                           1,
                           1
                       );

INSERT INTO italiennes (
                           id_italienne,
                           id_machine,
                           id_parfum_italienne,
                           actif
                       )
                       VALUES (
                           2,
                           2,
                           3,
                           1
                       );


-- Tableau : machines_italiennes
CREATE TABLE IF NOT EXISTS machines_italiennes (
    id_machine  INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_machine TEXT    NOT NULL
                        UNIQUE
);

INSERT INTO machines_italiennes (
                                    id_machine,
                                    nom_machine
                                )
                                VALUES (
                                    1,
                                    'Machine 1'
                                );

INSERT INTO machines_italiennes (
                                    id_machine,
                                    nom_machine
                                )
                                VALUES (
                                    2,
                                    'Machine 2'
                                );


-- Tableau : parfums_italiennes
CREATE TABLE IF NOT EXISTS parfums_italiennes (
    id_parfum_italienne  INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_parfum_italienne TEXT    NOT NULL,
    bio                  INTEGER NOT NULL
                                 DEFAULT 1
                                 CHECK (bio IN (0, 1) ) 
);

INSERT INTO parfums_italiennes (
                                   id_parfum_italienne,
                                   nom_parfum_italienne,
                                   bio
                               )
                               VALUES (
                                   1,
                                   'Vanille',
                                   1
                               );

INSERT INTO parfums_italiennes (
                                   id_parfum_italienne,
                                   nom_parfum_italienne,
                                   bio
                               )
                               VALUES (
                                   2,
                                   'Fraise',
                                   1
                               );

INSERT INTO parfums_italiennes (
                                   id_parfum_italienne,
                                   nom_parfum_italienne,
                                   bio
                               )
                               VALUES (
                                   3,
                                   'Mangue',
                                   1
                               );

INSERT INTO parfums_italiennes (
                                   id_parfum_italienne,
                                   nom_parfum_italienne,
                                   bio
                               )
                               VALUES (
                                   4,
                                   'Cassis',
                                   1
                               );

INSERT INTO parfums_italiennes (
                                   id_parfum_italienne,
                                   nom_parfum_italienne,
                                   bio
                               )
                               VALUES (
                                   5,
                                   'Citron',
                                   1
                               );


-- Tableau : sections_accueil
CREATE TABLE IF NOT EXISTS sections_accueil (
    id_section   INTEGER PRIMARY KEY AUTOINCREMENT,
    periode      TEXT    NOT NULL,
    code_section TEXT    NOT NULL,
    actif        INTEGER NOT NULL
                         DEFAULT 1
                         CHECK (actif IN (0, 1) ),
    ordre        INTEGER NOT NULL,
    UNIQUE (
        periode,
        code_section
    )
);

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 1,
                                 'normal',
                                 'histoire',
                                 1,
                                 1
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 2,
                                 'normal',
                                 'parfums',
                                 1,
                                 2
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 3,
                                 'normal',
                                 'gourmandises',
                                 1,
                                 3
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 4,
                                 'normal',
                                 'boissons',
                                 1,
                                 4
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 5,
                                 'ete',
                                 'histoire',
                                 1,
                                 1
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 6,
                                 'ete',
                                 'parfums',
                                 1,
                                 2
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 7,
                                 'ete',
                                 'supplements_ete',
                                 1,
                                 3
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 8,
                                 'ete',
                                 'gourmandises',
                                 1,
                                 4
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 9,
                                 'ete',
                                 'boissons',
                                 1,
                                 5
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 10,
                                 'buches',
                                 'histoire',
                                 1,
                                 1
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 11,
                                 'buches',
                                 'parfums',
                                 1,
                                 2
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 12,
                                 'buches',
                                 'buches',
                                 1,
                                 3
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 13,
                                 'buches',
                                 'gourmandises',
                                 1,
                                 4
                             );

INSERT INTO sections_accueil (
                                 id_section,
                                 periode,
                                 code_section,
                                 actif,
                                 ordre
                             )
                             VALUES (
                                 14,
                                 'buches',
                                 'boissons',
                                 1,
                                 5
                             );


-- Tableau : types
CREATE TABLE IF NOT EXISTS types (
    id_type  INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_type TEXT    NOT NULL
                     UNIQUE
);

INSERT INTO types (
                      id_type,
                      nom_type
                  )
                  VALUES (
                      1,
                      'Crème glacée'
                  );

INSERT INTO types (
                      id_type,
                      nom_type
                  )
                  VALUES (
                      2,
                      'Sorbet'
                  );


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
