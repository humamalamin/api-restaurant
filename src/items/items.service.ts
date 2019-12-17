import { Injectable } from '@nestjs/common';
import { Item } from '../item';
import { Items } from '../items';

@Injectable()
export class ItemsService {
    private readonly items: Items = {
        1: {
            id: 1,
            name: 'Burger',
            price: 150000,
            description: 'Tasty',
            image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png'
        },
        2: {
            id: 2,
            name: 'Pizza',
            price: 250000,
            description: 'Cheesy',
            image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png'
        }
    };

    findAll(): Items {
        return this.items
    }

    create(newItem: Item) {
        const id = new Date().valueOf();
        this.items[id] = {
            ...newItem,
            id,
        };
    }

    find(id: number): Item {
        const record: Item = this.items[id];

        if (record) {
            return record;
        }

        throw new Error('No record found');
    }

    update(updateItem: Item) {
        if (this.items[updateItem.id]) {
            this.items[updateItem.id] = updateItem;
            return;
        }

        throw new Error("No record found to update");
    }

    delete(id: number) {
        const record: Item = this.items[id];

        if (record) {
            delete this.items[id];
            return;
        }

        throw new Error('no record found to delete');
    }
}
