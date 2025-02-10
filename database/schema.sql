/*
invoices
- id: int
- invoice_number: int
- total_price_ex_vat: int
- vat: int
- total_price: int
- created_datetime: datetime

invoice_items
- id: int
- invoice_id: int
- item: varchar(255)
- amount: int
- item_price: int
- total_price_ex_vat: int
- vat: int
- total_price: int
 */

CREATE TABLE invoices (
    id int NOT NULL AUTO_INCREMENT,
    invoice_number int NOT NULL,
    total_price_ex_vat int NOT NULL,
    vat int NOT NULL,
    total_price int NOT NULL,
    created_datetime datetime NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE invoice_items (
    id int NOT NULL AUTO_INCREMENT,
    invoice_id int NOT NULL,
    item varchar(255) NOT NULL,
    amount int NOT NULL,
    item_price int NOT NULL,
    total_price_ex_vat int NOT NULL,
    vat int NOT NULL,
    total_price int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (invoice_id) REFERENCES invoices(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

ALTER TABLE invoices
ADD COLUMN customer_name VARCHAR(255) AFTER invoice_number;