# validity
A small tool to check the validity of GeoJSON Features in the standard input

# install
```console
git clone git@github.com:hfu/validity
cd validity
npm install
```

# use
```console
cat somewhere/some.ndjson | node index.js
```

# caveats
same as those of `geojson-validation` i.e.,

- this does not check ordering of bounding box coordinates
- this does not check coordinate reference system objects
- this does not check order of rings for polygons with multiple rings

