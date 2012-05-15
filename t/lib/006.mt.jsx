import "test-case.jsx";
import "experimental/random/mt.jsx";

class _Test extends TestCase {

	function test_api() : void {
		var mt = new MT;

		this.expect(mt.nextInt32(), "nextInt32").toBeGE(0);
		this.expect(mt.nextReal32(), "nextReal32").toBeGE(0);
		this.expect(mt.nextReal53(), "nextReal53").toBeGE(0);
	}

	function test_nextInt32() : void {
		var mt = new MT([0x123, 0x234, 0x345, 0x456]);

		for(var i = 0; i < 1000; ++i) {
			this.expect(mt.nextInt32(), "nextInt32").
				toBe(_Test.int32data[i]);
		}

	}
	function test_nextReal53() : void {
		var mt = new MT([0x123, 0x234, 0x345, 0x456]);

		for(var i = 0; i < 1000; ++i) {
			var d = mt.nextReal53() - _Test.res53data[i];
			this.expect(d, "nextReal53").toBeLE(0.0001);
		}
	}

	function test_init() : void {
		var seed = Date.now();
		var mt = new MT(seed);
		var r = mt.nextReal32();

		this.expect(r).toBeGE(0.0);

		mt.initialize(seed);

		this.expect(mt.nextReal32(), 'initialize() reset the seed').toBe(r);
	}

	// correct data generated by the original mt19937ar.c
	static const int32data = [
		1067595299,
		955945823,
		477289528,
		4107218783,
		4228976476,
		3344332714,
		3355579695,
		227628506,
		810200273,
		2591290167,
		2560260675,
		3242736208,
		646746669,
		1479517882,
		4245472273,
		1143372638,
		3863670494,
		3221021970,
		1773610557,
		1138697238,
		1421897700,
		1269916527,
		2859934041,
		1764463362,
		3874892047,
		3965319921,
		72549643,
		2383988930,
		2600218693,
		3237492380,
		2792901476,
		725331109,
		605841842,
		271258942,
		715137098,
		3297999536,
		1322965544,
		4229579109,
		1395091102,
		3735697720,
		2101727825,
		3730287744,
		2950434330,
		1661921839,
		2895579582,
		2370511479,
		1004092106,
		2247096681,
		2111242379,
		3237345263,
		4082424759,
		219785033,
		2454039889,
		3709582971,
		835606218,
		2411949883,
		2735205030,
		756421180,
		2175209704,
		1873865952,
		2762534237,
		4161807854,
		3351099340,
		181129879,
		3269891896,
		776029799,
		2218161979,
		3001745796,
		1866825872,
		2133627728,
		34862734,
		1191934573,
		3102311354,
		2916517763,
		1012402762,
		2184831317,
		4257399449,
		2899497138,
		3818095062,
		3030756734,
		1282161629,
		420003642,
		2326421477,
		2741455717,
		1278020671,
		3744179621,
		271777016,
		2626330018,
		2560563991,
		3055977700,
		4233527566,
		1228397661,
		3595579322,
		1077915006,
		2395931898,
		1851927286,
		3013683506,
		1999971931,
		3006888962,
		1049781534,
		1488758959,
		3491776230,
		104418065,
		2448267297,
		3075614115,
		3872332600,
		891912190,
		3936547759,
		2269180963,
		2633455084,
		1047636807,
		2604612377,
		2709305729,
		1952216715,
		207593580,
		2849898034,
		670771757,
		2210471108,
		467711165,
		263046873,
		3569667915,
		1042291111,
		3863517079,
		1464270005,
		2758321352,
		3790799816,
		2301278724,
		3106281430,
		7974801,
		2792461636,
		555991332,
		621766759,
		1322453093,
		853629228,
		686962251,
		1455120532,
		957753161,
		1802033300,
		1021534190,
		3486047311,
		1902128914,
		3701138056,
		4176424663,
		1795608698,
		560858864,
		3737752754,
		3141170998,
		1553553385,
		3367807274,
		711546358,
		2475125503,
		262969859,
		251416325,
		2980076994,
		1806565895,
		969527843,
		3529327173,
		2736343040,
		2987196734,
		1649016367,
		2206175811,
		3048174801,
		3662503553,
		3138851612,
		2660143804,
		1663017612,
		1816683231,
		411916003,
		3887461314,
		2347044079,
		1015311755,
		1203592432,
		2170947766,
		2569420716,
		813872093,
		1105387678,
		1431142475,
		220570551,
		4243632715,
		4179591855,
		2607469131,
		3090613241,
		282341803,
		1734241730,
		1391822177,
		1001254810,
		827927915,
		1886687171,
		3935097347,
		2631788714,
		3905163266,
		110554195,
		2447955646,
		3717202975,
		3304793075,
		3739614479,
		3059127468,
		953919171,
		2590123714,
		1132511021,
		3795593679,
		2788030429,
		982155079,
		3472349556,
		859942552,
		2681007391,
		2299624053,
		647443547,
		233600422,
		608168955,
		3689327453,
		1849778220,
		1608438222,
		3968158357,
		2692977776,
		2851872572,
		246750393,
		3582818628,
		3329652309,
		4036366910,
		1012970930,
		950780808,
		3959768744,
		2538550045,
		191422718,
		2658142375,
		3276369011,
		2927737484,
		1234200027,
		1920815603,
		3536074689,
		1535612501,
		2184142071,
		3276955054,
		428488088,
		2378411984,
		4059769550,
		3913744741,
		2732139246,
		64369859,
		3755670074,
		842839565,
		2819894466,
		2414718973,
		1010060670,
		1839715346,
		2410311136,
		152774329,
		3485009480,
		4102101512,
		2852724304,
		879944024,
		1785007662,
		2748284463,
		1354768064,
		3267784736,
		2269127717,
		3001240761,
		3179796763,
		895723219,
		865924942,
		4291570937,
		89355264,
		1471026971,
		4114180745,
		3201939751,
		2867476999,
		2460866060,
		3603874571,
		2238880432,
		3308416168,
		2072246611,
		2755653839,
		3773737248,
		1709066580,
		4282731467,
		2746170170,
		2832568330,
		433439009,
		3175778732,
		26248366,
		2551382801,
		183214346,
		3893339516,
		1928168445,
		1337157619,
		3429096554,
		3275170900,
		1782047316,
		4264403756,
		1876594403,
		4289659572,
		3223834894,
		1728705513,
		4068244734,
		2867840287,
		1147798696,
		302879820,
		1730407747,
		1923824407,
		1180597908,
		1569786639,
		198796327,
		560793173,
		2107345620,
		2705990316,
		3448772106,
		3678374155,
		758635715,
		884524671,
		486356516,
		1774865603,
		3881226226,
		2635213607,
		1181121587,
		1508809820,
		3178988241,
		1594193633,
		1235154121,
		326117244,
		2304031425,
		937054774,
		2687415945,
		3192389340,
		2003740439,
		1823766188,
		2759543402,
		10067710,
		1533252662,
		4132494984,
		82378136,
		420615890,
		3467563163,
		541562091,
		3535949864,
		2277319197,
		3330822853,
		3215654174,
		4113831979,
		4204996991,
		2162248333,
		3255093522,
		2219088909,
		2978279037,
		255818579,
		2859348628,
		3097280311,
		2569721123,
		1861951120,
		2907080079,
		2719467166,
		998319094,
		2521935127,
		2404125338,
		259456032,
		2086860995,
		1839848496,
		1893547357,
		2527997525,
		1489393124,
		2860855349,
		76448234,
		2264934035,
		744914583,
		2586791259,
		1385380501,
		66529922,
		1819103258,
		1899300332,
		2098173828,
		1793831094,
		276463159,
		360132945,
		4178212058,
		595015228,
		177071838,
		2800080290,
		1573557746,
		1548998935,
		378454223,
		1460534296,
		1116274283,
		3112385063,
		3709761796,
		827999348,
		3580042847,
		1913901014,
		614021289,
		4278528023,
		1905177404,
		45407939,
		3298183234,
		1184848810,
		3644926330,
		3923635459,
		1627046213,
		3677876759,
		969772772,
		1160524753,
		1522441192,
		452369933,
		1527502551,
		832490847,
		1003299676,
		1071381111,
		2891255476,
		973747308,
		4086897108,
		1847554542,
		3895651598,
		2227820339,
		1621250941,
		2881344691,
		3583565821,
		3510404498,
		849362119,
		862871471,
		797858058,
		2867774932,
		2821282612,
		3272403146,
		3997979905,
		209178708,
		1805135652,
		6783381,
		2823361423,
		792580494,
		4263749770,
		776439581,
		3798193823,
		2853444094,
		2729507474,
		1071873341,
		1329010206,
		1289336450,
		3327680758,
		2011491779,
		80157208,
		922428856,
		1158943220,
		1667230961,
		2461022820,
		2608845159,
		387516115,
		3345351910,
		1495629111,
		4098154157,
		3156649613,
		3525698599,
		4134908037,
		446713264,
		2137537399,
		3617403512,
		813966752,
		1157943946,
		3734692965,
		1680301658,
		3180398473,
		3509854711,
		2228114612,
		1008102291,
		486805123,
		863791847,
		3189125290,
		1050308116,
		3777341526,
		4291726501,
		844061465,
		1347461791,
		2826481581,
		745465012,
		2055805750,
		4260209475,
		2386693097,
		2980646741,
		447229436,
		2077782664,
		1232942813,
		4023002732,
		1399011509,
		3140569849,
		2579909222,
		3794857471,
		900758066,
		2887199683,
		1720257997,
		3367494931,
		2668921229,
		955539029,
		3818726432,
		1105704962,
		3889207255,
		2277369307,
		2746484505,
		1761846513,
		2413916784,
		2685127085,
		4240257943,
		1166726899,
		4215215715,
		3082092067,
		3960461946,
		1663304043,
		2087473241,
		4162589986,
		2507310778,
		1579665506,
		767234210,
		970676017,
		492207530,
		1441679602,
		1314785090,
		3262202570,
		3417091742,
		1561989210,
		3011406780,
		1146609202,
		3262321040,
		1374872171,
		1634688712,
		1280458888,
		2230023982,
		419323804,
		3262899800,
		39783310,
		1641619040,
		1700368658,
		2207946628,
		2571300939,
		2424079766,
		780290914,
		2715195096,
		3390957695,
		163151474,
		2309534542,
		1860018424,
		555755123,
		280320104,
		1604831083,
		2713022383,
		1728987441,
		3639955502,
		623065489,
		3828630947,
		4275479050,
		3516347383,
		2343951195,
		2430677756,
		635534992,
		3868699749,
		808442435,
		3070644069,
		4282166003,
		2093181383,
		2023555632,
		1568662086,
		3422372620,
		4134522350,
		3016979543,
		3259320234,
		2888030729,
		3185253876,
		4258779643,
		1267304371,
		1022517473,
		815943045,
		929020012,
		2995251018,
		3371283296,
		3608029049,
		2018485115,
		122123397,
		2810669150,
		1411365618,
		1238391329,
		1186786476,
		3155969091,
		2242941310,
		1765554882,
		279121160,
		4279838515,
		1641578514,
		3796324015,
		13351065,
		103516986,
		1609694427,
		551411743,
		2493771609,
		1316337047,
		3932650856,
		4189700203,
		463397996,
		2937735066,
		1855616529,
		2626847990,
		55091862,
		3823351211,
		753448970,
		4045045500,
		1274127772,
		1124182256,
		92039808,
		2126345552,
		425973257,
		386287896,
		2589870191,
		1987762798,
		4084826973,
		2172456685,
		3366583455,
		3602966653,
		2378803535,
		2901764433,
		3716929006,
		3710159000,
		2653449155,
		3469742630,
		3096444476,
		3932564653,
		2595257433,
		318974657,
		3146202484,
		853571438,
		144400272,
		3768408841,
		782634401,
		2161109003,
		570039522,
		1886241521,
		14249488,
		2230804228,
		1604941699,
		3928713335,
		3921942509,
		2155806892,
		134366254,
		430507376,
		1924011722,
		276713377,
		196481886,
		3614810992,
		1610021185,
		1785757066,
		851346168,
		3761148643,
		2918835642,
		3364422385,
		3012284466,
		3735958851,
		2643153892,
		3778608231,
		1164289832,
		205853021,
		2876112231,
		3503398282,
		3078397001,
		3472037921,
		1748894853,
		2740861475,
		316056182,
		1660426908,
		168885906,
		956005527,
		3984354789,
		566521563,
		1001109523,
		1216710575,
		2952284757,
		3834433081,
		3842608301,
		2467352408,
		3974441264,
		3256601745,
		1409353924,
		1329904859,
		2307560293,
		3125217879,
		3622920184,
		3832785684,
		3882365951,
		2308537115,
		2659155028,
		1450441945,
		3532257603,
		3186324194,
		1225603425,
		1124246549,
		175808705,
		3009142319,
		2796710159,
		3651990107,
		160762750,
		1902254979,
		1698648476,
		1134980669,
		497144426,
		3302689335,
		4057485630,
		3603530763,
		4087252587,
		427812652,
		286876201,
		823134128,
		1627554964,
		3745564327,
		2589226092,
		4202024494,
		62878473,
		3275585894,
		3987124064,
		2791777159,
		1916869511,
		2585861905,
		1375038919,
		1403421920,
		60249114,
		3811870450,
		3021498009,
		2612993202,
		528933105,
		2757361321,
		3341402964,
		2621861700,
		273128190,
		4015252178,
		3094781002,
		1621621288,
		2337611177,
		1796718448,
		1258965619,
		4241913140,
		2138560392,
		3022190223,
		4174180924,
		450094611,
		3274724580,
		617150026,
		2704660665,
		1469700689,
		1341616587,
		356715071,
		1188789960,
		2278869135,
		1766569160,
		2795896635,
		57824704,
		2893496380,
		1235723989,
		1630694347,
		3927960522,
		428891364,
		1814070806,
		2287999787,
		4125941184,
		3968103889,
		3548724050,
		1025597707,
		1404281500,
		2002212197,
		92429143,
		2313943944,
		2403086080,
		3006180634,
		3561981764,
		1671860914,
		1768520622,
		1803542985,
		844848113,
		3006139921,
		1410888995,
		1157749833,
		2125704913,
		1789979528,
		1799263423,
		741157179,
		2405862309,
		767040434,
		2655241390,
		3663420179,
		2172009096,
		2511931187,
		1680542666,
		231857466,
		1154981000,
		157168255,
		1454112128,
		3505872099,
		1929775046,
		2309422350,
		2143329496,
		2960716902,
		407610648,
		2938108129,
		2581749599,
		538837155,
		2342628867,
		430543915,
		740188568,
		1937713272,
		3315215132,
		2085587024,
		4030765687,
		766054429,
		3517641839,
		689721775,
		1294158986,
		1753287754,
		4202601348,
		1974852792,
		33459103,
		3568087535,
		3144677435,
		1686130825,
		4134943013,
		3005738435,
		3599293386,
		426570142,
		754104406,
		3660892564,
		1964545167,
		829466833,
		821587464,
		1746693036,
		1006492428,
		1595312919,
		1256599985,
		1024482560,
		1897312280,
		2902903201,
		691790057,
		1037515867,
		3176831208,
		1968401055,
		2173506824,
		1089055278,
		1748401123,
		2941380082,
		968412354,
		1818753861,
		2973200866,
		3875951774,
		1119354008,
		3988604139,
		1647155589,
		2232450826,
		3486058011,
		3655784043,
		3759258462,
		847163678,
		1082052057,
		989516446,
		2871541755,
		3196311070,
		3929963078,
		658187585,
		3664944641,
		2175149170,
		2203709147,
		2756014689,
		2456473919,
		3890267390,
		1293787864,
		2830347984,
		3059280931,
		4158802520,
		1561677400,
		2586570938,
		783570352,
		1355506163,
		31495586,
		3789437343,
		3340549429,
		2092501630,
		896419368,
		671715824,
		3530450081,
		3603554138,
		1055991716,
		3442308219,
		1499434728,
		3130288473,
		3639507000,
		17769680,
		2259741420,
		487032199,
		4227143402,
		3693771256,
		1880482820,
		3924810796,
		381462353,
		4017855991,
		2452034943,
		2736680833,
		2209866385,
		2128986379,
		437874044,
		595759426,
		641721026,
		1636065708,
		3899136933,
		629879088,
		3591174506,
		351984326,
		2638783544,
		2348444281,
		2341604660,
		2123933692,
		143443325,
		1525942256,
		364660499,
		599149312,
		939093251,
		1523003209,
		106601097,
		376589484,
		1346282236,
		1297387043,
		764598052,
		3741218111,
		933457002,
		1886424424,
		3219631016,
		525405256,
		3014235619,
		323149677,
		2038881721,
		4100129043,
		2851715101,
		2984028078,
		1888574695,
		2014194741,
		3515193880,
		4180573530,
		3461824363,
		2641995497,
		3179230245,
		2902294983,
		2217320456,
		4040852155,
		1784656905,
		3311906931,
		87498458,
		2752971818,
		2635474297,
		2831215366,
		3682231106,
		2920043893,
		3772929704,
		2816374944,
		309949752,
		2383758854,
		154870719,
		385111597,
		1191604312,
		1840700563,
		872191186,
		2925548701,
		1310412747,
		2102066999,
		1504727249,
		3574298750,
		1191230036,
		3330575266,
		3180292097,
		3539347721,
		681369118,
		3305125752,
		3648233597,
		950049240,
		4173257693,
		1760124957,
		512151405,
		681175196,
		580563018,
		1169662867,
		4015033554,
		2687781101,
		699691603,
		2673494188,
		1137221356,
		123599888,
		472658308,
		1053598179,
		1012713758,
		3481064843,
		3759461013,
		3981457956,
		3830587662,
		1877191791,
		3650996736,
		988064871,
		3515461600,
		4089077232,
		2225147448,
		1249609188,
		2643151863,
		3896204135,
		2416995901,
		1397735321,
		3460025646
	];

	static const res53data = [
		0.248569,
		0.111128,
		0.984635,
		0.781282,
		0.188639,
		0.596107,
		0.150582,
		0.988476,
		0.899581,
		0.412951,
		0.331061,
		0.66588,
		0.902194,
		0.0168918,
		0.605411,
		0.650273,
		0.141059,
		0.166506,
		0.308027,
		0.32482,
		0.489347,
		0.686952,
		0.67418,
		0.233783,
		0.491562,
		0.950514,
		0.571376,
		0.194555,
		0.63684,
		0.506455,
		0.643203,
		0.780239,
		0.761331,
		0.516456,
		0.434654,
		0.00811711,
		0.722313,
		0.235718,
		0.991253,
		0.88897,
		0.298527,
		0.541662,
		0.297562,
		0.063278,
		0.596178,
		0.985695,
		0.837161,
		0.557846,
		0.701678,
		0.700096,
		0.346629,
		0.0243117,
		0.716097,
		0.207664,
		0.528335,
		0.243922,
		0.630809,
		0.0483341,
		0.156176,
		0.108897,
		0.831128,
		0.899545,
		0.642222,
		0.535808,
		0.00185678,
		0.129452,
		0.307908,
		0.159946,
		0.222994,
		0.237844,
		0.442874,
		0.9724,
		0.130585,
		0.731361,
		0.784129,
		0.576285,
		0.0585374,
		0.420624,
		0.821736,
		0.695511,
		0.513665,
		0.852743,
		0.619363,
		0.42298,
		0.90512,
		0.236396,
		0.505463,
		0.189494,
		0.333214,
		0.988048,
		0.607099,
		0.0657378,
		0.324059,
		0.192767,
		0.916211,
		0.909242,
		0.569959,
		0.769457,
		0.712259,
		0.60306,
		0.883731,
		0.228676,
		0.200221,
		0.535423,
		0.0543893,
		0.858988,
		0.374494,
		0.627008,
		0.0574511,
		0.775245,
		0.235851,
		0.921956,
		0.0445691,
		0.762839,
		0.28736,
		0.823307,
		0.508535,
		0.0997652,
		0.945239,
		0.636126,
		0.874435,
		0.656558,
		0.235173,
		0.561194,
		0.811417,
		0.664202,
		0.415604,
		0.315432,
		0.528322,
		0.740354,
		0.201614,
		0.0208046,
		0.957907,
		0.667637,
		0.839092,
		0.770301,
		0.641601,
		0.397923,
		0.639393,
		0.100918,
		0.00611143,
		0.0426579,
		0.448937,
		0.798399,
		0.414915,
		0.436929,
		0.750608,
		0.947212,
		0.267243,
		0.402892,
		0.274879,
		0.0462859,
		0.490655,
		0.80298,
		0.176634,
		0.113239,
		0.903668,
		0.275001,
		0.740166,
		0.287582,
		0.536449,
		0.625713,
		0.466532,
		0.642506,
		0.356988,
		0.0191801,
		0.807355,
		0.823277,
		0.775518,
		0.957826,
		0.503438,
		0.516672,
		0.0595624,
		0.721142,
		0.433519,
		0.633175,
		0.587184,
		0.0604093,
		0.428373,
		0.588595,
		0.666095,
		0.527346,
		0.602284,
		0.0154902,
		0.442215,
		0.417659,
		0.08385,
		0.138538,
		0.651944,
		0.360654,
		0.340057,
		0.724659,
		0.192784,
		0.445615,
		0.996172,
		0.0105724,
		0.275869,
		0.913543,
		0.856322,
		0.270206,
		0.105326,
		0.193829,
		0.24945,
		0.226718,
		0.430167,
		0.518705,
		0.670865,
		0.81733,
		0.200903,
		0.667706,
		0.761916,
		0.0487032,
		0.00157938,
		0.184537,
		0.180779,
		0.664369,
		0.249565,
		0.300197,
		0.468337,
		0.21477,
		0.388182,
		0.607419,
		0.7789,
		0.954176,
		0.820891,
		0.104009,
		0.842242,
		0.269605,
		0.391226,
		0.817202,
		0.234717,
		0.201117,
		0.244544,
		0.999245,
		0.31373,
		0.173567,
		0.991907,
		0.693986,
		0.483771,
		0.936678,
		0.731221,
		0.883559,
		0.672229,
		0.784056,
		0.222479,
		0.257442,
		0.530241,
		0.410212,
		0.62518,
		0.27165,
		0.717605,
		0.387268,
		0.969179,
		0.367795,
		0.226003,
		0.335667,
		0.759541,
		0.363679,
		0.266966,
		0.320112,
		0.29813,
		0.0976314,
		0.00926277,
		0.395898,
		0.598678,
		0.181676,
		0.789519,
		0.53773,
		0.129397,
		0.373654,
		0.402561,
		0.145069,
		0.995463,
		0.545744,
		0.147972,
		0.18823,
		0.997019,
		0.471146,
		0.796833,
		0.702445,
		0.672422,
		0.991574,
		0.238073,
		0.216304,
		0.784938,
		0.469965,
		0.65441,
		0.288335,
		0.734806,
		0.411075,
		0.996478,
		0.883901,
		0.0241019,
		0.128386,
		0.306484,
		0.975491,
		0.683995,
		0.611611,
		0.890193,
		0.941811,
		0.261744,
		0.495078,
		0.0899397,
		0.462812,
		0.505814,
		0.838881,
		0.67562,
		0.863839,
		0.807862,
		0.915622,
		0.0742671,
		0.198738,
		0.877401,
		0.503172,
		0.439175,
		0.5194,
		0.914725,
		0.501938,
		0.100235,
		0.0644274,
		0.841639,
		0.415779,
		0.875711,
		0.783341,
		0.869846,
		0.879776,
		0.0479289,
		0.815698,
		0.808397,
		0.638157,
		0.386598,
		0.222587,
		0.131904,
		0.283288,
		0.892774,
		0.574475,
		0.758237,
		0.309643,
		0.727646,
		0.89239,
		0.537498,
		0.337707,
		0.741874,
		0.261759,
		0.700621,
		0.850295,
		0.442903,
		0.264258,
		0.768967,
		0.839012,
		0.0996079,
		0.191651,
		0.872082,
		0.97836,
		0.762657,
		0.650011,
		0.602068,
		0.32676,
		0.88752,
		0.608385,
		0.641998,
		0.61045,
		0.934874,
		0.377563,
		0.418331,
		0.987647,
		0.703658,
		0.104796,
		0.143691,
		0.342191,
		0.0830542,
		0.530591,
		0.65097,
		0.673695,
		0.379676,
		0.0998591,
		0.532716,
		0.923896,
		0.238791,
		0.466176,
		0.538757,
		0.699931,
		0.38926,
		0.41992,
		0.699921,
		0.26956,
		0.416762,
		0.172564,
		0.178591,
		0.852956,
		0.584855,
		0.0539835,
		0.0365936,
		0.816274,
		0.537704,
		0.689346,
		0.684082,
		0.125458,
		0.100244,
		0.451159,
		0.485589,
		0.178361,
		0.160588,
		0.408219,
		0.459806,
		0.83076,
		0.392583,
		0.699828,
		0.0993186,
		0.852368,
		0.193125,
		0.406684,
		0.371438,
		0.238531,
		0.675885,
		0.241565,
		0.458304,
		0.253565,
		0.684843,
		0.423462,
		0.90244,
		0.928669,
		0.519783,
		0.851179,
		0.197246,
		0.23039,
		0.744199,
		0.153246,
		0.506441,
		0.641685,
		0.905773,
		0.658992,
		0.968297,
		0.602233,
		0.315603,
		0.882297,
		0.487198,
		0.156396,
		0.839018,
		0.801475,
		0.728827,
		0.00413733,
		0.113396,
		0.860023,
		0.913816,
		0.93548,
		0.637183,
		0.495693,
		0.138711,
		0.380926,
		0.146655,
		0.0819527,
		0.54679,
		0.494517,
		0.355286,
		0.1395,
		0.354602,
		0.0876816,
		0.302071,
		0.87107,
		0.439217,
		0.12233,
		0.0752391,
		0.954636,
		0.694773,
		0.468966,
		0.973366,
		0.615138,
		0.675743,
		0.940834,
		0.771113,
		0.640976,
		0.659194,
		0.679876,
		0.655738,
		0.555012,
		0.0896658,
		0.428571,
		0.681157,
		0.489426,
		0.832206,
		0.77546,
		0.824069,
		0.769535,
		0.221201,
		0.409811,
		0.158598,
		0.272333,
		0.625798,
		0.622471,
		0.0287778,
		0.24531,
		0.810499,
		0.927005,
		0.437068,
		0.230052,
		0.952062,
		0.290947,
		0.907156,
		0.325436,
		0.762754,
		0.986705,
		0.279331,
		0.942187,
		0.788422,
		0.92179,
		0.545348,
		0.381077,
		0.652869,
		0.227652,
		0.745579,
		0.547082,
		0.420431,
		0.191891,
		0.702599,
		0.774081,
		0.0460581,
		0.693983,
		0.617112,
		0.101336,
		0.918107,
		0.233537,
		0.988972,
		0.805588,
		0.558404,
		0.632881,
		0.549484,
		0.45001,
		0.70807,
		0.792864,
		0.784839,
		0.123419,
		0.167282,
		0.375755,
		0.39816,
		0.0495248,
		0.765099,
		0.906547,
		0.853659,
		0.659134,
		0.594761,
		0.607225,
		0.693872,
		0.658977,
		0.028893,
		0.123521,
		0.32023,
		0.349037,
		0.659184,
		0.318726,
		0.854138,
		0.327442,
		0.274582,
		0.198654,
		0.853212,
		0.785442,
		0.925039,
		0.883063,
		0.70059,
		0.386717,
		0.417472,
		0.727508,
		0.109554,
		0.234563,
		0.728222,
		0.699804,
		0.573336,
		0.853779,
		0.720049,
		0.513765,
		0.126916,
		0.812179,
		0.327724,
		0.0561481,
		0.397733,
		0.314525,
		0.629626,
		0.455473,
		0.565507,
		0.160276,
		0.609599,
		0.993563,
		0.402696,
		0.0669974,
		0.877427,
		0.87243,
		0.676606,
		0.790521,
		0.251863,
		0.285655,
		0.990549,
		0.471105,
		0.843976,
		0.909532,
		0.237927,
		0.443378,
		0.677491,
		0.272869,
		0.619654,
		0.0222602,
		0.42247,
		0.992501,
		0.525315,
		0.786856,
		0.89893,
		0.686084,
		0.836013,
		0.637776,
		0.248907,
		0.486619,
		0.329696,
		0.213932,
		0.155657,
		0.289767,
		0.614987,
		0.285185,
		0.183719,
		0.134922,
		0.828115,
		0.37549,
		0.275219,
		0.771768,
		0.997471,
		0.0917524,
		0.217665,
		0.232712,
		0.579033,
		0.132426,
		0.0120484,
		0.844876,
		0.574231,
		0.484202,
		0.526675,
		0.498497,
		0.790225,
		0.216972,
		0.289493,
		0.876295,
		0.273731,
		0.515056,
		0.33296,
		0.925372,
		0.0754113,
		0.611587,
		0.0313555,
		0.248219,
		0.861599,
		0.601602,
		0.244775,
		0.517571,
		0.979811,
		0.210656,
		0.276932,
		0.715008,
		0.957301,
		0.477047,
		0.34707,
		0.293984,
		0.60486,
		0.0887045,
		0.918727,
		0.106686,
		0.0452036,
		0.180119,
		0.914276,
		0.958535,
		0.696199,
		0.767654,
		0.494791,
		0.971877,
		0.575636,
		0.787034,
		0.908777,
		0.10599,
		0.193155,
		0.102105,
		0.479507,
		0.727012,
		0.661103,
		0.24517,
		0.0345119,
		0.834949,
		0.910352,
		0.88459,
		0.159632,
		0.351713,
		0.0909796,
		0.323096,
		0.425345,
		0.739085,
		0.992798,
		0.284581,
		0.986722,
		0.0945217,
		0.536811,
		0.626835,
		0.248015,
		0.983289,
		0.555238,
		0.847847,
		0.714489,
		0.439229,
		0.641579,
		0.730557,
		0.658529,
		0.402806,
		0.07291,
		0.205557,
		0.0813825,
		0.336811,
		0.187171,
		0.605508,
		0.342907,
		0.730239,
		0.650197,
		0.725757,
		0.0342087,
		0.569975,
		0.844227,
		0.559822,
		0.584491,
		0.158196,
		0.0794791,
		0.11376,
		0.675322,
		0.278291,
		0.21144,
		0.0414007,
		0.129527,
		0.87391,
		0.277508,
		0.909627,
		0.96102,
		0.320071,
		0.0311982,
		0.220175,
		0.807312,
		0.741669,
		0.439384,
		0.585755,
		0.732143,
		0.77464,
		0.17062,
		0.960761,
		0.685219,
		0.0566741,
		0.83471,
		0.466129,
		0.0119492,
		0.902852,
		0.329806,
		0.52025,
		0.283309,
		0.00598244,
		0.211358,
		0.784287,
		0.329099,
		0.273807,
		0.181563,
		0.287264,
		0.636762,
		0.245263,
		0.542575,
		0.337354,
		0.0210297,
		0.118923,
		0.298757,
		0.737676,
		0.629801,
		0.229931,
		0.877875,
		0.136734,
		0.979077,
		0.505802,
		0.0527028,
		0.0511335,
		0.750364,
		0.228777,
		0.857076,
		0.855472,
		0.587201,
		0.0924382,
		0.0782041,
		0.360047,
		0.461924,
		0.984242,
		0.68594,
		0.299623,
		0.892313,
		0.876459,
		0.281067,
		0.0813631,
		0.760106,
		0.279477,
		0.821912,
		0.791898,
		0.516097,
		0.28999,
		0.0393474,
		0.49553,
		0.190176,
		0.334521,
		0.721063,
		0.71466,
		0.855713,
		0.209205,
		0.467668,
		0.748983,
		0.448666,
		0.910259,
		0.8732,
		0.255521,
		0.952174,
		0.664416,
		0.94516,
		0.0250789,
		0.173826,
		0.855023,
		0.0216021,
		0.146887,
		0.713237,
		0.954004,
		0.908978,
		0.662066,
		0.62805,
		0.526901,
		0.739184,
		0.436839,
		0.324227,
		0.953196,
		0.839317,
		0.336714,
		0.651524,
		0.0345173,
		0.682006,
		0.64721,
		0.73402,
		0.938351,
		0.314853,
		0.0132328,
		0.315846,
		0.337548,
		0.24443,
		0.781626,
		0.113607,
		0.232623,
		0.487498,
		0.921566,
		0.366832,
		0.234214,
		0.916097,
		0.377063,
		0.308919,
		0.0694487,
		0.888174,
		0.987113,
		0.632427,
		0.683471,
		0.432652,
		0.0413011,
		0.926974,
		0.569903,
		0.198203,
		0.0248284,
		0.502056,
		0.651392,
		0.097339,
		0.626517,
		0.580374,
		0.210108,
		0.893906,
		0.320374,
		0.34228,
		0.582019,
		0.495951,
		0.839068,
		0.266942,
		0.882103,
		0.120907,
		0.759303,
		0.927681,
		0.562017,
		0.359259,
		0.611094,
		0.58435,
		0.626679,
		0.0685876,
		0.580572,
		0.577197,
		0.635306,
		0.719155,
		0.639796,
		0.79344,
		0.844502,
		0.994856,
		0.172764,
		0.749658,
		0.619903,
		0.0587824,
		0.0549713,
		0.425711,
		0.89643,
		0.393102,
		0.0428825,
		0.112006,
		0.89734,
		0.420773,
		0.727814,
		0.616991,
		0.677564,
		0.0572518,
		0.188852,
		0.681932,
		0.22082,
		0.649957,
		0.291245,
		0.873745,
		0.69903,
		0.456539,
		0.311187,
		0.396728,
		0.301639,
		0.0491328,
		0.257428,
		0.976632,
		0.36438,
		0.265299,
		0.0583902,
		0.186224,
		0.55707,
		0.47659,
		0.884776,
		0.562457,
		0.210994,
		0.7584,
		0.289882,
		0.249674,
		0.260297,
		0.641519,
		0.128808,
		0.0269053,
		0.496303,
		0.435661,
		0.814842,
		0.685291,
		0.384054,
		0.229947,
		0.27218,
		0.0287044,
		0.618313,
		0.256097,
		0.721858,
		0.300706,
		0.568222,
		0.967728,
		0.263079,
		0.165013,
		0.685623,
		0.865116,
		0.818883,
		0.931724,
		0.217869,
		0.102621,
		0.793039,
		0.904796,
		0.606354,
		0.635738,
		0.997015,
		0.316923,
		0.974464,
		0.609443,
		0.6952,
		0.56969,
		0.883418,
		0.892236,
		0.850553,
		0.794521,
		0.145678,
		0.748223,
		0.42546,
		0.683087,
		0.529354,
		0.61524,
		0.631079,
		0.201023,
		0.754856,
		0.328617,
		0.589172,
		0.868454,
		0.0398973,
		0.325034,
		0.695166,
		0.54587,
		0.329202,
		0.634971,
		0.641788,
		0.706943,
		0.860743,
		0.857398,
		0.74566
	];
}
