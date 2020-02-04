#!/bin/bash
echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql -U node_user dragonstackdb < ./data/db/sql/generation.sql
psql -U node_user dragonstackdb < ./data/db/sql/dragon.sql

echo "dragonstackdb configured"