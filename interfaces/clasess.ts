(() => {

    interface XMen {
        name: string,
        realName: string,
        mutantPower( id: number ): string
    }

    interface Human {
        age: number
    }

    class Mutant implements XMen, Human {
        public age: number = 0;
        public name: string = '';
        public realName: string = '';
        
        mutantPower( id: number ) {
            return this.name + '' + this.realName; 
        }
    }
})()