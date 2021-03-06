const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        //arg is context object reference
        sayHello(ctx) {
            //context.params={} =inital value is empty
            // console.log(ctx)
            //console.log(ctx.params)
            // return `${ctx.params.message} ${ctx.params.name}`;
            const { message, name } = ctx.params;
            return `${message} ${name}`;
        }
    }
});


async function start() {
    try {
        await broker.start();
        //call method takes two parameters -name of the service,params would be object
        let input = { name: 'Subramanian', message: 'Hello' };
        let helloMessage = await broker.call('hello.sayHello', input);
        console.log(`${helloMessage}`);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('done!!!')
    }
}
start();
broker.repl();