// import Exception from './Exception';

export default class Service {
    async execute(args){
        const result = await this.body(args);

        return result;
    }
}