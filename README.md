# work-with-us

> uni rakun CV

This is a project done for two purposes:
 - Testing Apollo Stack with SSR
 - Having nice CV to print (PDF render) and than can be viewed on internet (same data/same code)

This project will not evolved at the moment since the two purposes are done.

We used this stack:
 - ReactJS
 - Apollo (Client/Server)
 - NodeJS
 - PouchDB

The SSR part was done manually (without using a tiers lib).\
The Cache part was done manually (without using a tierss lib).

`PouchDB` uses local files (relative to the project) to store data.\
This is convenient to only have one Docker image to deploy.

## Development
 - `yarn`
 - `yarn start:dev`

## Production
 - `yarn`
 - `yarn build`
 - `yarn start`

## Render CV
 - `yarn`
 - `yarn build`
 - `yarn pdf`

# About uni rakun
**uni rakun** is created by two passionate french developers.

Do you want to contact them? Go to their [website](https://unirakun.fr)

<table border="0">
 <tr>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/26094222?s=460&v=4" width="100" /></td>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/17828231?s=460&v=4" width="100" /></td>
 </tr>
 <tr>
  <td align="center"><a href="https://github.com/guillaumecrespel">Guillaume CRESPEL</a></td>
  <td align="center"><a href="https://github.com/fabienjuif">Fabien JUIF</a></td>
</table>
