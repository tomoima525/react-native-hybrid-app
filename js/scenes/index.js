import React from 'react';
import PropTypes from 'prop-types';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import map from 'lodash.map';
import { BackButton } from '../components/common/BackButton';
import * as scenes from './scenes';

const RouterWithRedux = connect()(Router);

const initialSceneProps = {
  initial: true,
  renderLeftButton: () => <BackButton backTitle='back' onPress={() => console.log("back")} />,
};

const Scenes = (props, context) => (
  <RouterWithRedux>
    <Scene key="root"
      {...( true ? initialSceneProps : {} )}
      // renderLeftButton={() =>
      //   <BackButton
      //     backTitle='back'
      //     onPress={() => }/>
      //   }
      >
      { map(scenes, (component, name) => (
        <Scene
          key={name}
          title={name}
          component={component}
          hideNavBar={false}
          initial={false}
          renderBackButton={() =>
            <BackButton backTitle='back' onPress={() => Actions.pop() }/>}
        />
      ))}
    </Scene>
  </RouterWithRedux>
);

Scenes.contextTypes = {
  initialScene: PropTypes.string.isRequired,
};

export default connect()(Scenes);
