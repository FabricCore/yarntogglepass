modtoggle.setPass(ClientSendMessageEvents.ALLOW_CHAT, (res) => res);
modtoggle.setPass(ClientSendMessageEvents.ALLOW_COMMAND, (res) => res);
modtoggle.setPass(ClientSendMessageEvents.MODIFY_CHAT, 0);
modtoggle.setPass(ClientSendMessageEvents.MODIFY_COMMAND, 0);

modtoggle.setPass(ClientReceiveMessageEvents.ALLOW_CHAT, (res) => res);
modtoggle.setPass(ClientReceiveMessageEvents.ALLOW_GAME, (res) => res);
modtoggle.setPass(ClientReceiveMessageEvents.MODIFY_GAME, 0);

modtoggle.setPass(ParticleRenderEvents.ALLOW_BLOCK_DUST_TINT, (res) => res);

modtoggle.setPass(
    LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER,
    (res) => res,
);

modtoggle.setPass(WorldRenderEvents.BEFORE_BLOCK_OUTLINE, (res) => res);
modtoggle.setPass(WorldRenderEvents.BLOCK_OUTLINE, (res) => res);

modtoggle.setPass(EntityElytraEvents.ALLOW, (res) => res);
modtoggle.setPass(EntityElytraEvents.CUSTOM, (res) => res);

// cannot use ActionResult because enums are currently not possible

modtoggle.setPass(EntitySleepEvents.ALLOW_RESETTING_TIME, (res) => res);
modtoggle.setPass(EntitySleepEvents.ALLOW_SETTING_SPAWN, (res) => res);

modtoggle.setPass(ServerLivingEntityEvents.ALLOW_DAMAGE, (res) => res);
modtoggle.setPass(ServerLivingEntityEvents.ALLOW_DEATH, (res) => res);

modtoggle.setPass(ServerPlayerEvents.ALLOW_DEATH, (res) => res);

modtoggle.setPass(PlayerBlockBreakEvents.BEFORE, (res) => res);

modtoggle.setPass(ServerMessageEvents.ALLOW_CHAT_MESSAGE, (res) => res);
modtoggle.setPass(ServerMessageEvents.ALLOW_GAME_MESSAGE, (res) => res);
