function theBridgeOfHoistingDoom() {
    var sword = undefined;
    var dwarf = undefined;
    var fall = undefined;
    var ring = undefined;
    function fellowship() {
        return "friends";
    }
    sword = "sting";
    dwarf = function() {
        return "axe";
    }
    fall = "Fly you fools!";
    fellowship = function() {
        return "broken";
    }
    ring(); //RING no esta definido - FIN 
    return sword;
}
