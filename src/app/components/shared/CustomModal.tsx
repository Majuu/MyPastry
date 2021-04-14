import React, { FunctionComponent} from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import CloseButton from '../../../../assets/images/close.svg';
import { ColorsEnum } from '../../enums/colors.enum';
import { modalActions } from '../../store/actions/modal.actions';

interface CustomModalReduxStateInterface {
  modal: {
    isModalVisible: boolean;
  };
}

interface CustomModalProps {
  modal: any;
  dispatch: any;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: ColorsEnum.LIGHT_GREEN
  },
  header: {
    marginTop: 15,
    marginBottom: 20
  },
  topContainerWrapper: {
    marginTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 4,
    borderStyle: 'solid',
    borderColor: ColorsEnum.GREEN
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  stepIndicator: {
    width: 'auto',
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: ColorsEnum.DARK_GREEN,
    paddingRight: 3,
    marginLeft: 6
  },
  recipeContent: {
    flex: 1
  }
});

// ToDo props interface
const CustomModal: FunctionComponent<CustomModalProps> = ({ modal, dispatch, children }): React.ReactElement => {

  const closeModal = (): void =>
    dispatch({
      type: modalActions.HIDE_RECIPE_MODAL
    });

  return (
    <Modal animationType={'fade'} visible={modal} transparent={true} animated={true}>
      <View style={styles.container}>
        <CloseButton width={20} height={20} style={styles.closeButton} onPress={closeModal} />
        {children}
      </View>
    </Modal>
  );
};

export default connect(
  (state: CustomModalReduxStateInterface): { modal: boolean } => ({
    modal: state.modal.isModalVisible
  })
)(CustomModal);
