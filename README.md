# react-native-button-group         

Description: 
--------------------------------------    
A group of buttons that can be added to the button. This group can be used to control whether the group of buttons is fixed at the top of the page or fixed in the middle or fixed at the bottom by passing attributes. It is also possible to perform flow layout and follow the bottom of the main page..     
    
   
The final rendering
----
![The final rendering](https://github.com/suwu150/static-resource/blob/master/images/react-native-custome-buttongroup-image.gif?raw=true)


Installation:  
-------------------------------------- 
```
 npm install --save react-native-button-group
```
Example usage: 
--------------------------------------- 
1.basic     

```javascript
import ButtonGroup from 'react-native-button-group';
   ...
render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 10 }}>{this.state.count}</Text>
        <ButtonGroup>
          <Button
            title={'top button group'}
            onPress={() => this.setState({ count: 'submit' })}
          />
        </ButtonGroup>
      </View>
    );
  }
```

Props:   
---------------------------------------

|Props|Explain|type|require|default|          
|:-------|:--------|:--------|:-------|:----------|
|position|The position of the button group, which is one of (center, top, bottom), must be isFloat=true|string|no|bottom|     
|isFLoat|If true, Position attribute will work|bool|no|false|      
|style|button group style,The style used to modify the button group style|object|no|{padding: 5,width: WINDOW_EIDTH, backgroundColor: '#fff',flexDirection: 'row',justifyContent: 'space-between'}|     

Examples from props:
```javascript
   render() {
     return (
       <View style={styles.container}>
         <Text style={{ marginBottom: 10 }}>{this.state.count}</Text>
         <ButtonGroup
           isFLoat={true}
           position={'top'}
         >
           <Button
             title={'top button group'}
             onPress={() => this.setState({ count: 'submit' })}
           />
         </ButtonGroup>
         <ButtonGroup
           isFLoat={true}
           position={'center'}
         >
           <Button
             title={'center button group'}
             onPress={() => this.setState({ count: 'submit' })}
           />
           <Button
             title={'center button group'}
             onPress={() => this.setState({ count: 'submit' })}
           />
         </ButtonGroup>
         <ButtonGroup
           isFLoat={true}
           position={'bottom'}
         >
           <Button
             title={'bottom button group'}
             onPress={() => this.setState({ count: 'submit' })}
           />
         </ButtonGroup>
       </View>
     );
   }
```

LICENSE: 
-------   
MIT


