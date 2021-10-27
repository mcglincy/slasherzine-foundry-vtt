
Hooks.on("morkborgReady", function() {
  console.log("***** SLASHER JAM *****"); 
  console.log(game.morkborg.config);

  game.morkborg.config.scrollTypes["slasherpower"] = "SJ.SlasherPower";
  game.morkborg.config.scrollTypes["victimpower"] = "SJ.VictimPower";
  console.log(game.morkborg.config);

  // override default Scvmfactory settings
  game.morkborg.config.scvmFactory = {
    foodAndWaterPack: "morkborg.equipment-misc",
    foodItemName: "Dried food",
    waterItemName: "Waterskin",

    characterCreationPack: "slasher-jam.slasher-jam-tables",
    startingEquipmentTable1: "Starting Equipment (1)",
    startingEquipmentTable2: "Starting Equipment (2)",
    startingEquipmentTable3: "Starting Equipment (3)",
    startingWeaponTable: "Weapons",
    startingArmorTable: "Armor",
    // terribleTraitsTable: "Terribler Traits",
    // brokenBodiesTable: "Brokener Bodies",
    // badHabitsTable: "Badder Habits",
  };
});