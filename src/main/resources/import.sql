DROP TABLE CONDITION;
DROP SEQUENCE CONDITION_SEQ;

CREATE SEQUENCE CONDITION_SEQ
  START WITH 1
  INCREMENT BY 1
  CACHE 100;

CREATE TABLE "CONDITION" ( 
  "ID" NUMBER NOT NULL , 
  "TITLE" VARCHAR(200) NOT NULL, 
  "TITLE_MLG" VARCHAR(200) NOT NULL, 
  "DESCRIPTION" CLOB NOT NULL,
  "DESCRIPTION_MLG" CLOB NOT NULL
);


INSERT INTO CONDITION ( ID, TITLE, TITLE_MLG, DESCRIPTION, DESCRIPTION_MLG ) VALUES ( 0,
  'Conditions d’utilisation', 
  'Lalàna mifehy ny fampiasana', 
  'Bienvenue sur PARI!\n\nPARI crée des technologies et des services qui permettent aux gens de se connecter les uns aux autres, de créer des communautés et de développer des entreprises. Les présentes Conditions régissent votre utilisation de PARI, Messenger et des autres produits, fonctionnalités, applications, services, technologies et logiciels que nous proposons (les Produits ou Produits PARI), sauf si nous insulons expressément que des conditions distinctes (et non celles-ci) s’appliquent. Ces Produits vous sont fournis par PARI, Inc.\n', 
  'Tonga soa ato amin`ny PARI!\n\nManorina teknôlôjia sy asa fanompoana izay manome fahafahana ny olona hifandray sy manorina fiaraha-monina ary mampivoatra asa fandraharahana ny PARI. Ireo Fiteny ireo dia mifehy ny fampiasanao ny PARI sy i Messenger ary ireo vokatra hafa, ny toetoetra, ny application, ny sampandraharaha, ny teknôlôjia, ary ny logiciel izay atolotray (ny Vokatra na Votoatin`ny PARI), afa-tsy amin`ny toerana lazainay mazava tsara fa mihatra ireo fepetra misaraka (fa tsy ireo). Ireo Fitaovana ireo dia omena anao amin`ny alalan`ny PARI, Inc.\n'
);

INSERT INTO CONDITION ( ID, TITLE, TITLE_MLG, DESCRIPTION, DESCRIPTION_MLG ) VALUES ( CONDITION_SEQ.NEXTVAL,
  'Les services que nous fournissons', 
  'Ireo servisy ataonay', 
  'Notre mission est de donner aux gens le pouvoir de construire une communauté et de rapprocher le monde. Pour vous aider à faire avancer cette mission, nous vous fournissons les Produits et services décrits ci-dessous :\nOffrez-vous une expérience personnalisée :\nVotre expérience sur Facebook ne ressemble à celle de personne d’autre : des publications, histoires, événements, publicités et autres contenus que vous voyez dans le fil d’actualité ou notre plateforme vidéo aux Pages que vous suivez et à d’autres fonctionnalités que vous pouvez utiliser, telles que Trending, Marketplace et search. Nous utilisons les données dont nous disposons - par exemple, sur les connexions que vous effectuez, les choix et les paramètres que vous sélectionnez, et ce que vous partagez et faites sur et en dehors de nos Produits - pour personnaliser votre expérience.\n', 
  'Ny asa nanirahana antsika dia ny hanome ny olona hery hanorenana fiaraha-monina sy hampifanakaiky bebe kokoa an`izao tontolo izao. Mba hanampiana amin`ny fandrosoana ity asa fitoriana ity dia omenay anao ireo Vokatra sy asa fanompoana voafaritra etsy ambany:\nManomeza traikefa manokana ho anao:\nNy zavatra niainanao ao amin`ny Facebook dia tsy mitovy amin`ny an`ny olon-kafa: avy amin`ireo lahatsoratra, tantara, zava-nitranga, fampitam-baovao ary votoatiny hafa hitanao ao amin`ny News Feed na ny horonan-tsary misy anay ka hatrany amin`ireo Pejy arahinao sy ireo lafin-javatra hafa izay mety ho ampiasainao, toy ny Vidéo, Marketplace, ary ny fikarohana. Mampiasa ny fampahalalana anananay izahay - ohatra, mikasika ny fifandraisana izay ataonao, ny safidy sy ny toe-javatra misafidy, ary ny zavatra zarainao sy ataonao sy ataonao ao amin`ireo Vokatra ampiasainay sy ataonao - mba hampifanaraka amin`ny tena manokana ny zavatra niainanao.\n'
);

INSERT INTO CONDITION ( ID, TITLE, TITLE_MLG, DESCRIPTION, DESCRIPTION_MLG ) VALUES ( CONDITION_SEQ.NEXTVAL,
  'Comment nos services sont financés', 
  'Ny fomba hamatsiana ny asa fanompoana ataontsika.', 
  'Au lieu de payer pour utiliser PARI et les autres produits et services que nous proposons, en utilisant les Produits PARI couverts par les présentes Conditions, vous acceptez que nous puissions vous montrer des publicités que les entreprises et les organisations nous paient pour promouvoir sur et en dehors des Produits des sociétés PARI. Nous utilisons vos données personnelles, telles que des informations sur votre activité et vos intérêts, pour vous montrer des publicités plus pertinentes pour vous.\nLa protection de la vie privée des personnes est au cœur de la façon dont nous avons conçu notre système publicitaire. Cela signifie que nous pouvons vous montrer des publicités pertinentes et utiles sans dire aux annonceurs qui vous êtes. Nous ne vendons pas vos données personnelles. Nous permettons aux annonceurs de nous dire des choses comme leur objectif commercial et le type d’audience qu’ils souhaitent voir leurs publicités (par exemple, les personnes âgées de 18 à 35 ans qui aiment le vélo). Nous montrons ensuite leur annonce à des personnes qui pourraient être intéressées.', 
  'Ho solon`ny fandoavana ny fampiasana ny PARI sy ireo vokatra sy asa fanompoana hafa atolotray, amin`ny alalan`ny fampiasana ireo Vokatra avy amin`ny PARI izay voalaza ao amin`ireo Fiteny ireo, dia manaiky ianao fa afaka mampiseho aminareo ireo fampitahana fa omen`ny raharaham-barotra sy fikambanana anay mba hampitomboana sy hanalavitra ny Vokatry ny Orinasa PARI. Ampiasainay ny tahirin-kevitrao manokana, toy ny fampahalalana momba ny asa atao sy ny zavatra mahaliana anao, mba hampisehoana anao ireo fampidirana izay manan-danja kokoa aminao.\nNy fiarovana ny tsiambaratelon`ny olona no ivon`ny fomba nandrafetanay ny rafitra fampiarahanay. Midika izany fa afaka mampiseho anao ireo fampilazana manan-danja sy tena ilaina izahay kanefa tsy milaza amin`ireo mpiandraikitra hoe iza ianao. Tsy mivarotra ny tahirin-kevitrao manokana izahay. Avelanay ireo mpiandraikitra hilaza aminay zavatra toy ny tanjon`izy ireo amin`ny fandraharahana, ary ny karazana mpihaino tian`izy ireo hahita ny fampidirany (ohatra, olona eo anelanelan`ny 18 ka hatramin`ny 35 taona izay tia mandeha bisikileta). Avy eo dia asehontsika amin`ny olona izay mety ho liana ny hafatra nataon`izy ireo.'
);

INSERT INTO CONDITION ( ID, TITLE, TITLE_MLG, DESCRIPTION, DESCRIPTION_MLG ) VALUES ( CONDITION_SEQ.NEXTVAL,
  'Dispositions supplémentaires', 
  'Vatsy fanampiny', 
  'Nous travaillons constamment à améliorer nos services et à développer de nouvelles fonctionnalités pour rendre nos produits meilleurs pour vous et notre communauté. Par conséquent, nous pouvons avoir besoin de mettre à jour ces Conditions de temps à autre pour refléter avec précision nos services et pratiques. Nous n’apporterons des modifications que si les dispositions ne sont plus appropriées ou si elles sont incomplètes, et uniquement si les modifications sont raisonnables et tiennent dûment compte de vos intérêts.\nNous vous informerons (par exemple, par e-mail ou par le biais de nos Produits) au moins 30 jours avant d’apporter des modifications aux présentes Conditions et vous donnerons la possibilité de les examiner avant leur entrée en vigueur, à moins que des modifications ne soient requises par la loi. Une fois que les Conditions mises à jour sont en vigueur, vous serez lié par elles si vous continuez à utiliser nos Produits.\nNous espérons que vous continuerez à utiliser nos Produits, mais si vous n’acceptez pas nos Conditions mises à jour et que vous ne souhaitez plus faire partie de la communauté Facebook, vous pouvez supprimer votre compte à tout moment.', 
  'Miasa tsy tapaka izahay mba hanatsarana ny asa fanompoanay sy hampitombo ireo lafin-javatra vaovao mba hahatonga ny Vokatray ho tsaratsara kokoa ho anao sy ho an`ny fiaraha-monina misy anay. Vokatr`izany dia mety ilaintsika ombieny ombieny ny manavao ireo Fepetra ireo mba hahitana taratra mazava tsara ireo asa sy fomba fanaontsika. Izay fanovana ihany no hataonay raha toa ka tsy mety intsony ny vatsy na tsy feno intsony, ary raha toa ka azo atao tsara ihany ireo fanovana ary mandray anjara amin`izay mahaliana anao.\nHampahafantatra anao izahay (ohatra, amin`ny alalan`ny email na amin`ny alalan`ny Vokatra ampiasainay) farafahakeliny 30 andro alohan`ny hanaovanay fanovana ireo Fitsipika ireo ary manome fahafahana anao hamerina hijery izany alohan`ny hampisy izany, raha tsy hoe takian`ny lalàna ny fanovana. Raha vao misy Teny nohavaozina manan-kery dia ho voafatotra amin`izany ianao raha toa ka manohy mampiasa ireo Vokatra ampiasainay ianao.\nManantena izahay fa hanohy hampiasa ireo Vokatra ampiasainay ianao, saingy raha tsy manaiky ny Fepetra nohavaozinay ianao ary tsy te ho tafiditra ao anatin`ny fiaraha-monina Facebook intsony dia afaka manala ny kaontinao ianao na amin`ny fotoana inona na amin`ny fotoana inona.'
);

SELECT * FROM CONDITION;

COMMIT;