### Component API:
`<Tabs>` component:

| Property | Type | Default | Required | Description |
|------------------|--------|---------|----------|-------------------------------------------|
| className | String | n/a | no | class needed to style <ul> element |
| headerClass | String | n/a | no | class needed to style tabs <div> |
| activePanelClass | String | n/a | no | style needed to style active <li> element |


`<Panel>` component:

| Property | Type | Default | Required | Description |
|----------|--------|---------|----------|--------------------|
| title | string | n/a | yes | tabs header  title |

## Usage
```javascript
<Tabs activePanelClass="active"
      headerClass="block-head"
     className="nav-tab">
                            <Panel title='description'>
                                        <div className="block-inner">
                                       <p>  react is awsome !</p>
                                </div>
                            </Panel>

                            <Panel title='alternatives'>
                                        <div className="block-inner">
                                       <p>  nothing !</p>
                                </div>
                            </Panel>

</Tabs>
```
