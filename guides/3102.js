// DANM -- Written by Vanq

module.exports = {
  "s-3102-1000-124-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Right Then Front",
    },
    {
      type: "func",
      func: SpawnMarker.bind(null, false, 90, 200, 100, 2000, true, null),
    },
    {
      type: "func",
      func: SpawnMarker.bind(null, false, 270, 200, 100, 2000, true, null),
    },
  ], // Left Foot Stomp
  "s-3102-1000-121-0": [
    // 121->122 -> 123
    {
      type: "text",
      sub_type: "message",
      message: "Left Then Front",
    },
    {
      type: "func",
      func: SpawnMarker.bind(null, false, 90, 200, 100, 2000, true, null),
    },
    {
      type: "func",
      func: SpawnMarker.bind(null, false, 270, 200, 100, 2000, true, null),
    },
  ],
  "s-3102-1000-101-0": [
    {
      type: "text",
      sub_type: "message",
      message: "2 slash",
    },
  ], // Double Upslash
  "s-3102-1000-102-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Cross Slash",
    },
  ], // Cross Slash
  "s-3102-1000-103-0": [
    {
      type: "text",
      sub_type: "message",
      message: "2 slash + Cross",
    },
  ], // Double Slash into Cross Slash
  "s-3102-1000-104-0": [
    {
      type: "text",
      sub_type: "message",
      message: "2 slash",
    },
  ], // Double Upslash
  "s-3102-1000-105-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Uppercut + Stun",
    },
  ], // Uppercut
  //"s-3102-1000-106-0": [{"type": "text", "sub_type": "message","message": "Stun","message_RU": "Uppercut + Stun"}], // Stun (cont from 105)
  "s-3102-1000-107-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Resbait",
    },
  ],
  "s-3102-1000-109-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Stomp -> Spin",
    },
  ], // Right Stomp into Spin
  "s-3102-1000-110-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Jump + Quantum Wave",
    },
  ], // Jump (ATTACK: IN THEN OUT)
  "s-3102-1000-111-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Leap (Targetted)",
    },
  ], // Leap
  "s-3102-1000-112-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Kick + Backwave",
    },
  ],
  "s-3102-1000-115-0": [
    {
      type: "text",
      sub_type: "message",
      message: "AoE Bombs",
    },
  ],
  //"s-3102-1000-112-1": [{"type": "text", "sub_type": "message","message": "Kick + Backwave (2)","message_RU": "Kick + Back"}],
  //"s-3102-1000-114-0": [{"type": "text", "sub_type": "message","message": "TC -> Stun (2)","message_RU": "TC -> Stun"}],
  "s-3102-1000-118-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Double Upslash -> Front Stab",
      message_RU: "Double Upslash into Front Stab",
    },
  ], // Double Upslash into Front Stab
  "s-3102-1000-120-0": [
    {
      type: "text",
      sub_type: "message",
      message: "Front into Stun",
    },
  ], // 120 -> 114
  //"s-3102-1000-310-0": [{"type": "text", "sub_type": "message","message": "Jump -> Wave (2)","message_RU": "Jump + Quantum Wave"}],
  //"s-3102-1000-302-0": [{"type": "text", "sub_type": "message","message": "GATHER","message_RU": "TC -> Stun"}],
  "s-3102-1000-304-0": [
    {
      type: "text",
      sub_type: "message",
      message: "SHIELD",
    },
  ],
};
