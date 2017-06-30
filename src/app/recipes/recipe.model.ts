// Recipe model to define how a single recipe looks like
// We can create new objects based on the model setup which is a blueprint for objects

export class Recipe{

   public name: string; //assigning types in typescript
   public description: string;
   public imagePath: string;

   constructor(name: string,desc: string, imagePath: string){
     this.name=name;
     this.description=desc;
     this.imagePath=imagePath;
   }

}
