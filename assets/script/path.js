cc.Class({
    extends: cc.Component,

    properties: {
        prefabA: cc.Prefab,
        prefabB: cc.Prefab
    },
    
    onLoad () {
        this.path = [
            [1,1,1,1,0,1,1,1,1,0],
            [0,0,0,0,0,0,0,0,1,0],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,1,1,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1],
        ]
    },

    start () {
        for (let i in this.path){
            for(let j in this.path[i]){
                if(this.path[i][j] == 1){
                    let node = cc.instantiate(this.prefabA);
                    node.parent = this.node;
                    let posX = i * 100;
                    let posY = j * 100;
                    node.position = cc.v2(posX,posY)
                }else if(this.path[i][j] == 2){
                    let node = cc.instantiate(this.prefabB);
                    node.parent = this.node;
                    let posX = i * 100;
                    let posY = j * 100;
                    node.position = cc.v2(posX,posY)
                }
            }
        }
        
    }
});
