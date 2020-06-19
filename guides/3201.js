// Gossamer Vault (Hard)

const {SpawnMarker, SpawnVector, SpawnCircle} = require("../lib");

let notice_guide = true;
let player, entity, library, effect;
let notice = true;
let boss = 3;
let lastboss = false;
let print = false;

function start_boss() {
	lastboss = true;
	notice = true;
	boss = 3;
	print = true;
}

function start_boss1() {
	print = true;
}

function skilld_event(skillid, handlers, event, ent, dispatch) {
	if (skillid === 203 || skillid === 204) {
			notice = false;
			setTimeout(() => notice = true, 4000);
	}
	if (notice && skillid === 234 && boss === 1) { //203 204技能没出/满足234 打手位置本体技能/满足吃分身buff
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "ДД дебафф!!!",
			"message": "Dps entity"
		});*/
		setTimeout(function () {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Скоро дебафф!",
				"message": "Debuff coming soon！"
			});	
		}, 55000);
	}
	if (notice && skillid === 234 && boss === 0) { //203 204技能没出/满足234 打手位置本体技能/满足吃本体buff
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "танк дебафф!!!",
			"message": "tank"
		});*/
		setTimeout(function () {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Скоро дебафф!",
				"message": "Debuff coming soon！"
			});
		}, 55000);
	}
	if (skillid === 32010224) {  //吃分身buff
		boss = 1;
		setTimeout(function () {
			if (boss === 1) {
				handlers['text']({
					"sub_type": "message",
					"message_RU": "Смена дебаффа!",
					"message": "Debuff reload"
				});
				boss = 3;
			}
		}, 80000);
	}
	if (skillid === 32010220) { //吃本体buff
		boss = 0;
		setTimeout(function () {
			if (boss === 0){
				handlers['text']({
					"sub_type": "message",
					"message_RU": "Смена дебаффа!",
					"message": "Debuff reload"
				});
				boss = 3;
			}
		}, 80000);
	}
	if (skillid === 203 && boss === 0) {
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "танк дебафф!!!",
			"message": "tank"
		});*/
		setTimeout(function () {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Скоро дебафф!!!",
				"message": "Debuff coming soon！"
			});
		}, 55000);
	}
	if (skillid === 203 && boss === 1) {
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "ДД дебафф!!!",
			"message": "Dps entity"
		});*/
		setTimeout(function () {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Скоро дебафф!!!",
				"message": "Debuff coming soon！"
			});
		}, 55000);
	}
	if (skillid === 204 && boss === 1) {
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "танк дебафф!!!",
			"message": "tank"
		});*/
		setTimeout(function () {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Скоро дебафф!!",
				"message": "Debuff coming soon！"
			});
		}, 55000);
	}
	if (skillid === 204 && boss === 0) {
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "дд дебафф!!!",
			"message": "Dps entity"
		});*/
		setTimeout(function () {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Скоро дебафф!!!",
				"message": "Debuff coming soon！"
			});
		}, 55000);
	}
	if (skillid === 203 && boss === 3) {
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "ДД дебафф!!!",
			"message": "Dps entity"
		});*/
		setTimeout(function () {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Скоро дебафф!!!",
				"message": "Debuff coming soon！"
			});
		}, 55000);
	}
	if (skillid === 204 && boss === 3) {
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "Танк дебафф!!!",
			"message": "Tank entity"
		});	*/
		setTimeout(function () {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Скоро дебафф!!!",
				"message": "Debuff coming soon！"
			});
		}, 55000);
	}
	if (notice && skillid === 234 && boss === 3) {
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "дд дебафф!!!",
			"message": "dps entity"
		}); */
		setTimeout(function () {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Скоро дебафф!!!",
				"message": "Debuff coming soon！"
			});
		}, 55000);
	}
	if (skillid === 9203100 && lastboss) {
		/*handlers['text']({
			"sub_type": "message",
			"message_RU": "Смерть +1!!"
		});*/
	}
}

function print_eighty(handlers) {
	if (print) {
		handlers['text']({
			"sub_type": "message",
			"message": "80%",
			"message_RU": "Дебафф"
		});
	}
	print = false;
}

function print_seventyfive(handlers) {
	if (print) {
		handlers['text']({
			"sub_type": "message",
			"message": "75%",
			"message_RU": "Камни"
		});
	}
	print = false;
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS

	//"s-3201-1000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Dodge","message_RU": "Эвейд!!!" }],
	"s-3201-1000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Stun attack","message_RU": "Стан!!!"}],
	"s-3201-1000-107-0": [{"type": "text","sub_type": "message","message": "back","message_RU": "|Полоса|" },
						  {"type": "text","sub_type": "message","delay": 2250,"message": "pull","message_RU": "Откид!!!"}
	],

	"s-3201-1000-111-0": [{"type": "text","sub_type": "message","message": "Ranged DPS attention","message_RU": "Волна назад"}],
	//"s-3201-1000-112-0": [{"type": "text","sub_type": "message","message": "Left + Right","message_RU": "Лево + Право" }],
	"s-3201-1000-113-0": [{"type": "text","sub_type": "message","message": "Jump (Slow)","message_RU": "Прыжок" },
						  {"type": "text","sub_type": "message","delay": 1500,"message": "pull","message_RU": "Камень!"}
	],
	//{"type": "text","sub_type": "notification","delay": 1500,"message": "pull","message_RU": "Камень!"}

	"s-3201-1000-118-0": [{"type": "text","sub_type": "message","message": "Jump P (Slow)","message_RU": "Прыжок" },
						  {"type": "text","sub_type": "message","delay": 1500,"message": "pull","message_RU": "Камень!"},
	],
	//{"type": "text","sub_type": "notification","delay": 1500,"message": "pull","message_RU": "Камень!"}	
	"s-3201-1000-119-0": [{"type": "text","sub_type": "message","delay": 1000,"message": "Back + Front","message_RU": "Вперед + Назад" }],
	//"s-3201-1000-121-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Right","message_RU": "Право" }],
	//"s-3201-1000-122-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Left","message_RU": "Лево" }],
	"s-3201-1000-124-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Stun attack","message_RU": "Стан (фаст)"}],
	"s-3201-1000-127-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "back","message_RU": "|Полоса| (фаст)"},
						  {"type": "text","class_position":"heal","sub_type": "message","message": "back","message_RU": "|Полоса| (фаст)"}
	],
	//"s-3201-1000-128-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Triple Attack","message_RU": "Комба"}],
	"s-3201-1000-131-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Ranged DPS attention","message_RU": "Волна назад (фаст)"},
						  {"type": "text","class_position":"heal","sub_type": "message","message": "Ranged DPS attention","message_RU": "Волна назад (фаст)"}
	],
	//"s-3201-1000-132-0": [{"type": "text","sub_type": "message","message": "Left + Right","message_RU": "Лево + Право (фаст)"}],
	"s-3201-1000-133-0": [{"type": "text","sub_type": "message","delay": 500,"message": "Jump (Fast)","message_RU": "Прыжок (фаст)"}],
	"s-3201-1000-138-0": [{"type": "text","sub_type": "message","delay": 500,"message": "Jump P (Fast)","message_RU": "Прыжок (фаст)"}],
	"s-3201-1000-139-0": [{"type": "text","sub_type": "message","message": "Back + Front (Fast)","message_RU": "Вперед + Назад (фаст)"}],
	//"s-3201-1000-141-0": [{"type": "text","class_position":"tank","sub_type": "message","message_RU": "双手前砸 (медленно)"}],
	//"s-3201-1000-142-0": [{"type": "text","class_position":"tank","sub_type": "message","message_RU": "1правая+левая"}],
	"s-3201-1000-143-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Left > Right","message_RU": "Слева > Справа"},
						  {"type": "text","class_position":"dps","sub_type": "message","message": "Right < Left","message_RU": "Справа < Слева"},
						  {"type": "text","class_position":"heal","sub_type": "message","message": "Right < Left","message_RU": "Справа < Слева"},
						  {"type": "func","func": SpawnMarker.bind(null,false,150,300,100,2715,true,null)},	//1
						  {"type": "func","func": SpawnMarker.bind(null,false,225,300,2800,4175,true,null)}, //6
						  {"type": "func","func": SpawnMarker.bind(null,false,30,300,100,1000,true,null)},	//1
						  {"type": "func","func": SpawnMarker.bind(null,false,330,300,1100,5000,true,null)}  //7
	],
	"s-3201-1000-145-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Left > Right","message_RU": "Слева > Справа"},
						  {"type": "text","class_position":"dps","sub_type": "message","message": "Right < Left","message_RU": "Справа < Слева"},
						  {"type": "text","class_position":"heal","sub_type": "message","message": "Right < Left","message_RU": "Справа < Слева"},
						  {"type": "func","func": SpawnMarker.bind(null,false,30,300,100,1000,true,null)},	//1
						  {"type": "func","func": SpawnMarker.bind(null,false,330,300,1100,5000,true,null)}, //7
						  {"type": "func","func": SpawnMarker.bind(null,false,150,300,100,2000,true,null)},	//1
						  {"type": "func","func": SpawnMarker.bind(null,false,225,300,2500,5000,true,null)}	//6
	],
	"s-3201-1000-148-0": [{"type": "text","sub_type": "message","message": "Right hand (flying)","message_RU": "Правая рука (подлет)"}],
	"s-3201-1000-149-0": [{"type": "text","sub_type": "message","message": "Left hand (flying)","message_RU": "Левая рука (подлет)"}],
	"s-3201-1000-151-0": [{"type": "text","sub_type": "message","message": "Stun attack","message_RU": "Стан!!!"}],
	"s-3201-1000-305-0": [{"type": "text","sub_type": "message","message": "Pizza","message_RU": "Pizza"}],
	"s-3201-1000-311-0": [{"type": "text","sub_type": "message","message_RU": "Мёд!"},
	{"type": "text","sub_type": "message","delay": 4000,"message": "pull","message_RU": "Откид!"}],
	"s-3201-1000-312-0": [{"type": "text","sub_type": "message","message_RU": "Мёд (фаст)!!!"},
	{"type": "text","sub_type": "message","delay": 2000,"message": "pull","message_RU": "Откид!!!"}],
	"s-3201-1000-313-0": [{"type": "text","sub_type": "message","message": "Circles (Slow)","message_RU": "Кольцо"},{"type": "func","func": SpawnCircle.bind(null,false,553,0,75,10,300,0,6000)}],
	"s-3201-1000-314-0": [{"type": "text","sub_type": "message","message": "Circles (Fast)","message_RU": "Кольцо (фаст)"},{"type": "func","func": SpawnCircle.bind(null,false,553,0,75,10,300,0,6000)}],


	// 2 BOSS

	"h-3201-2000-99": [{"type": "func","func": start_boss}],
	
	//"s-3201-2000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right left","message_RU": "右手 左手"}],
	//"s-3201-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left right","message_RU": "左手 右手"}],
	//"s-3201-2000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "spin","message_RU": "旋转顺"}],
	//"s-3201-2000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_RU": "右手"}],
	//"s-3201-2000-105-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_RU": "前突刺"}],
	//"s-3201-2000-107-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_RU": "左手"}],
	"s-3201-2000-108-0": [{"type": "text","sub_type": "message","message": "Back attack!","message_RU": "Откид назад!"}],
	//"s-3201-2000-109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "quaternion Attack","message_RU": "4连击"}],
	//"s-3201-2000-110-0": [{"type": "text","sub_type": "message","message_RU": "?"}],
	//"s-3201-2000-114-0": [{"type": "text","sub_type": "message","message_RU": "??"}],
	//"s-3201-2000-116-0": [{"type": "text","sub_type": "message","message": "Back","message_RU": "Назад"}],
	"s-3201-2000-150-0": [{"type": "text","sub_type": "message","message": "Phantom","message_RU": "Фантом"}],
	//"s-3201-2000-201-0": [{"type": "text","sub_type": "message","message": "back 8m","message_RU": "Движение назад 8 м"}],
	//"s-3201-2000-202-0": [{"type": "text","sub_type": "message","message": "front 8m","message_RU": "Движение вперед 8м"}],
	"s-3201-2000-203-0": [{"type": "func","func": skilld_event.bind(null, 203)}],
	"s-3201-2000-204-0": [{"type": "func","func": skilld_event.bind(null, 204)}],
	
	"am-3201-320126-32010224": [{"type": "text","sub_type": "notification","message": "Next true","message_RU": "След. правда"},{"type": "func","func": skilld_event.bind(null, 32010224)}],
	"am-3201-2000-32010220": [{"type": "text","sub_type": "notification","message": "Next false","message_RU": "След. ложь"},{"type": "func","func": skilld_event.bind(null, 32010220)}],
	"ae-0-0-9203100": [{"type": "func","func": skilld_event.bind(null, 9203100)}],
	
	//"s-3201-2000-211-0": [{"type": "text","sub_type": "message","message": "front","message_RU": "???"}],
	//"s-3201-2000-213-0": [{"type": "text","sub_type": "message","message": "back","message_RU": "????"}],
	// "s-3201-2000-226-0": [{"type": "text","sub_type": "message","message_RU": "空中吸收 蓄力"}],
	"s-3201-2000-228-0": [ 
		{"type": "text","sub_type": "message","message": "Team up","message_RU": "Камни (вместе)!!!"},
		{"type": "text","sub_type": "message","delay": 3500,"message": "Dodge","message_RU": "Эвейд"}
	//	{"type": "text","sub_type": "notification","delay": 3500,"message": "Dodge","message_RU": "Эвейд"}
	//	{"type": "text","sub_type": "message","delay": 65000,"message": "Dodge","message_RU": "Эвейд"},
	],
	//"s-3201-2000-229-0": [{"type": "text","sub_type": "message","message": "3","message_RU": "3 Бомбы"}],
	"s-3201-2000-230-0": [{"type": "text","sub_type": "message","message": "AOE","message_RU": "AOE!!"}],

	"s-3201-2000-231-0": [{"type": "text","sub_type": "message","message": "OUT safe","message_RU": "ОТ НЕГО"},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,300,0,3000)}
	],
	"s-3201-2000-232-0": [{"type": "text","sub_type": "message","message": "IN safe","message_RU": "К НЕМУ"},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,300,0,3000)},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,3,1000,0,3000)}
	],

	//"s-3201-2000-233-0": [{"type": "text","sub_type": "message","message": "5","message_RU": "5 бомб" }],

	"h-3201-2000-81": [{"type": "func","func": print_eighty}],
	"h-3201-2000-78": [{"type": "func","func": start_boss1}],
	"h-3201-2000-76": [{"type": "func","func": print_seventyfive}],
	
	"s-3201-2000-234-0": [{"type": "func","func": skilld_event.bind(null, 234)}],
	//"s-3201-2000-235-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_RU": "注视2人吃鉴定" }]
	"s-3201-2000-236-0": [{"type": "text","sub_type": "message","message": "counter","message_RU": "Конус вперед (байт)"}],

	/*"s-3201-320115-203": [{"type": "func","func": SpawnMarker.bind(null,false,0, 0, 100, 3000,true,null)},
						  {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,15,125,0,3000)}
	],	// 	1王水晶位 */

	//320124-------------302 301
   /*"s-3201-320120-204": [{"type": "func","func": SpawnMarker.bind(null,false,0, 0, 10, 1100,false,["Бомба замедленного действия","Бомба замедленного действия"])},   //炸弹慢
					  {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,15,150,0,1100)}],
   
   "s-3201-320120-205": [{"type": "func","func": SpawnMarker.bind(null,false,0, 0, 10, 1100,false,["Бомба","Бомба"])},   //炸弹
					  {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,15,150,0,1100)}]*/
};
