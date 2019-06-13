import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Detalle from './components/Detalle';
import Conciertos from './components/Conciertos'
import ChangePassword from './components/ChangePassword'
import CreateUser from './components/CreateUser'
import DatosPersonales from './components/DatosPersonales';
import Comentarios from './components/Comentarios';
import MockedViews from './components/MockedViews'
import Craigslist from './components/Craigslist'
import LogInCards from './components/LogInCards'
import CardView from './components/CardView'
import Festivales from './components/Festivales';
import Mapa from './components/Mapa';
import Search from './components/Search';
import {FontAwesome } from '@expo/vector-icons';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';


function handleSearch() {
  
}

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

class SignUpClass extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <LogInCards
          onPressLogin={this.checkLogin.bind(this)}
          onPressPass={this.goPass.bind(this)}
          onPressCreate={this.goCreate.bind(this)}
      />
    )
  }
  checkLogin() {
    //this.props.navigation.navigate('PeliculasScreen', { idUser: id });
    /*this.props.navigation.navigate('PeliculasScreen', { idUser: '123'}); Funciona */
    this.props.navigation.navigate('Recomendados',{id: 123});
  }

  goPass() {
    this.props.navigation.navigate('ChangePassword');
  }

  goCreate() {
    this.props.navigation.navigate('CreateUser');
  }
}
class ChangePasswordScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ChangePassword
        onPress={this.checkPassword.bind(this)}
      />
    );
  }
  checkPassword() {
    this.props.navigation.navigate('SignUpClass')
  }
}
class CreateUserScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <CreateUser
        onPress={this.checkPassword.bind(this)}
      />
    );
  }
  checkPassword() {
    this.props.navigation.navigate('SignUpClass')
  }
}
class MockedViewScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'Recomendados',
    headerStyle: {
      backgroundColor: 'white',
      height:50
    },
    headerTintColor: '#3399ff',
  };
  render() {
    return (
      <Craigslist
        onPressGo={this.pasarConcierto.bind(this)}
      />
    );
  }
  pasarConcierto() {
    this.props.navigation.navigate('Detalle',{id: 'hola'});
  }
}
class ConciertosScreen extends React.Component {

  static navigationOptions = {
    title: 'Conciertos',
    headerStyle: {
      backgroundColor: 'white',
      height:50
    },
    headerTintColor: '#3399ff',
  };
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Conciertos
        onPressGo={this.pasarConcierto.bind(this)}
      />
    );
  }
  pasarConcierto() {
    this.props.navigation.navigate('Detalle');
  }
}
class FestivalesScreen extends React.Component {

  static navigationOptions = {
    title: 'Festivales',
    headerStyle: {
      backgroundColor: 'white',
      height:50
    },
    headerTintColor: '#3399ff',
  };
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Festivales
        onPressGo={this.pasarConcierto.bind(this)}
      />
    );
  }
  pasarConcierto() {
    this.props.navigation.navigate('Detalle');
  }
}
class DetalleScreen extends React.Component {

  static  navigationOptions= ({ navigation }) => {
    return {
      headerRight: (
        a= '',
        <View style={{flexDirection: 'row'}}>
        <FontAwesome name="map-marker" style={{ paddingRight: 20, color: '#3399ff'}} 
          onPress={() => navigation.navigate("Mapa")}
          size={22}
        />
        </View>
      ),
      title: 'Detalles',
    headerStyle: {
      backgroundColor: 'white',
      height:50
    },
    headerTintColor: '#3399ff',
    }
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Detalle
        onPress={this.pasarConcierto.bind(this)}
      />
    );
  }
  pasarConcierto() {
    this.props.navigation.navigate('Mapa');
  }
}
class SearchScreen extends React.Component {

  static navigationOptions = {
    title: 'Search',
    headerStyle: {
      backgroundColor: 'white',
      height:50
    },
    headerTintColor: '#3399ff',
  };
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Search
        onPressGo={this.pasarConcierto.bind(this)}
      />
    );
  }
  pasarConcierto() {
    this.props.navigation.navigate('Detalle');
  }
}
const MockedViewStackNavigator = createStackNavigator(
  {
    MockedViewScreen: {
      screen: MockedViewScreen,

      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10, color: '#3399ff' }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          ),
          headerRight: (
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="search" style={{ marginRight: 20, color: '#3399ff'}} 
              onPress={() => navigation.navigate('Helado')}
              size={22}
            />
            <FontAwesome name="map" style={{ paddingRight: 20, color: '#3399ff'}} 
              onPress={() => navigation.navigate("Mapa")}
              size={22}
            />
            </View>
          )
        }
      }
    },
    Helado: {screen: SearchScreen},
    //Helado: {screen: MockedViewScreen},
    //Helado: {screen: MockedViewScreen},
    Detalle: { screen: DetalleScreen},
    Mapa: {screen: Mapa},
  },
  {
    initialRouteName: 'MockedViewScreen',
  }
);

const ConciertosStackNavigator = createStackNavigator(
  {
    ConciertosScreen: {
      screen: ConciertosScreen,
      navigationOptions: ({ navigation}) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10, color: '#3399ff' }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          ),
          headerRight: (
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="search" style={{ marginRight: 20, color: '#3399ff'}} 
              onPress={() => navigation.navigate('Helado',{id: 'none'})}
              size={22}
            />
            <FontAwesome name="map" style={{ paddingRight: 20, color: '#3399ff'}} 
              onPress={() => navigation.navigate("Mapa")}
              size={22}
            />
            </View>
          )
        }
      }
    },
    Helado: {screen: SearchScreen},
    Detalle: { screen: DetalleScreen},
    Mapa: {screen: Mapa}
  },
  {
    initialRouteName: 'ConciertosScreen',
  }
);

const FestivalesStackNavigator = createStackNavigator(
  {
    FestivalesScreen: {
      screen: FestivalesScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10, color: '#3399ff' }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          ),
          headerRight: (
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="search" style={{ marginRight: 20, color: '#3399ff'}} 
              onPress={() => navigation.navigate('Helado',{id: 'none'})}
              size={22}
            />
            <FontAwesome name="map" style={{ paddingRight: 20, color: '#3399ff'}} 
              onPress={() => navigation.navigate("Mapa")}
              size={22}
            />
            </View>
          )
        }
      }
    },
    Helado: {screen: SearchScreen},
    Detalle: { screen: DetalleScreen},
    Mapa: {screen: Mapa}
  },
  {
    initialRouteName: 'FestivalesScreen',
  }
);

const DetalleStackNavigator = createStackNavigator(
  {
    DetalleScreen: {
      screen: DetalleScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerRight: (
            <FontAwesome name="map" style={{ paddingRight: 10, color: '#3399ff'}} 
              onPress={() => navigation.navigate("Mapa")}
              size={22}
            />
          )
        }
      }
    },
    Detalle: { screen: DetalleScreen},
    Mapa: {screen: Mapa}
  },
  {
    initialRouteName: 'DetalleScreen',
  }
);

const PerfilTabNavigator = createBottomTabNavigator({
  DatosPersonales,
  Comentarios
}, {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        headerTitle: 'Perfil',
        headerTintColor: '#3399ff',
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: '#3399ff' }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        color: '#3399ff',
        headerStyle: {
          backgroundColor: 'white',
          height:50
        }
      }
    },
    tabBarOptions: {
      inactiveTintColor: 'black',
      style: {
        backgroundColor: 'pink',

      },
      labelStyle: {
        fontSize: 18,
        paddingVertical: 10
      }

    }
  });
  


const PerfilStackNavigator = createStackNavigator({
  PerfilTabNavigator: PerfilTabNavigator
});

const AppDrawerNavigator = createDrawerNavigator({
  Recomendados: MockedViewStackNavigator,
  Conciertos: ConciertosStackNavigator,
  Festivales: FestivalesStackNavigator,
  Perfil: PerfilStackNavigator,
}, {
    drawerBackgroundColor: 'pink',
    contentOptions: {
      //Esto sirve para cambiar algunos colores
      /*activeTintColor: '#3399ff'*/
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  SignUpClass: { screen: SignUpClass},
  Craigslists: { screen: MockedViewScreen },
  ChangePassword: { screen: ChangePasswordScreen },
  //Login: { screen: LoginScreen },
  CreateUser: { screen: CreateUserScreen },
  Drawer: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});