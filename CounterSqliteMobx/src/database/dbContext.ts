import {getConnection} from "typeorm";
import {Counter} from "./entity/counter";

export async function getCounter(): Promise<Counter | undefined> {
    const connection = await getConnection();
    const repo = connection.getRepository(Counter);
    return await repo.findOne(1);
}

export async function setCounter(count: number) {
    const connection = await getConnection();
    const repo = connection.getRepository(Counter);
    let counter: Counter = await repo.findOne(1) ?? new Counter();
    counter.Count = count;
    await repo.save(counter);
}