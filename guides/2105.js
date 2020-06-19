// Prequest

const {SpawnCircle} = require("../lib");

let notice_guide = true;
let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
	// First Boss (2000) Skills 101 - 104 health:  h-2105-2000-98
	//s-2105-2000-101-0
	//s-2105-2000-102-0
	//s-2105-2000-103-0
	//s-2105-2000-104-0
	// Second Boss (1000) 
	"s-2105-1000-101-0": [{"type": "text","sub_type": "msgcg","message": "2 slash","message_RU": "2 slash"}], // Double Upslash
	"s-2105-1000-102-0": [{"type": "text","sub_type": "msgcg","message": "Cross Slash","message_RU": "Cross Slash"}],  // Cross Slash
	"s-2105-1000-103-0": [{"type": "text", "sub_type": "msgcg","message": "2 slash + Cross (iframe)","message_RU": "2 slash"}],  // Double Slash into Cross Slash
	"s-2105-1000-104-0": [{"type": "text", "sub_type": "msgcg","message": "2 slash","message_RU": "2 slash"}], // Double Upslash
	"s-2105-1000-105-0": [{"type": "text", "sub_type": "msgcg","message": "Uppercut + Stun","message_RU": "Uppercut + Stun"}],  // Uppercut
	"s-2105-1000-106-0": [{"type": "text", "sub_type": "msgcg","message": "Stun","message_RU": "Uppercut + Stun"}], // Stun (cont from 105)
	"s-2105-1000-107-0": [{"type": "text", "sub_type": "msgcg","message": "Resbait","message_RU": "Resbait"}],
	"s-2105-1000-109-0": [{"type": "text", "sub_type": "msgcg","message": "Stomp","message_RU": "Stomp"}], // Right Stomp into Spin
	"s-2105-1000-110-0": [{"type": "text", "sub_type": "msgcg","message": "Jump + Quantum Wave","message_RU": "Jump + Quantum Wave"}], // Jump (ATTACK: IN THEN OUT)
	"s-2105-1000-111-0": [{"type": "text", "sub_type": "msgcg","message": "Leap","message_RU": "Leap"}], // Leap
	"s-2105-1000-112-0": [{"type": "text", "sub_type": "msgcg","message": "Kick + Backwave","message_RU": "Kick + Back"}], 
	//"s-2105-1000-112-1": [{"type": "text", "sub_type": "msgcg","message": "Kick + Backwave (2)","message_RU": "Kick + Back"}], 
	//"s-2105-1000-114-0": [{"type": "text", "sub_type": "msgcg","message": "TC -> Stun (2)","message_RU": "TC -> Stun"}],
	"s-2105-1000-118-0": [{"type": "text", "sub_type": "msgcg","message": "Double Upslash -> Front Stab","message_RU": "Double Upslash into Front Stab"}], // Double Upslash into Front Stab
	"s-2105-1000-120-0": [{"type": "text", "sub_type": "msgcg","message": "TC -> Stun","message_RU": "TC -> Stun"}], // 120 -> 114
	//"s-2105-1000-310-0": [{"type": "text", "sub_type": "msgcg","message": "Jump -> Wave (2)","message_RU": "Jump + Quantum Wave"}], 
	
};