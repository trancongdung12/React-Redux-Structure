import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

const SIDE_MENU_ID = 'sideMenu';
const SCREEN_OVERLAY = {
  android: 'overCurrentContext',
  ios: 'overFullScreen',
};

export const defaultBottomTab = {
  textColor: 'grey',
  iconColor: 'grey',
  selectedIconColor: 'black',
  selectedTextColor: 'black',
  iconInsets: {
    top: 5,
    left: 0,
    bottom: -5,
    right: 0,
  },
  fontSize: 10,
  drawBehind: true,
  disableIconTint: true, // set true if you want to disable the icon tinting
  disableSelectedIconTint: true,
};

export const defaultTopBar = {
  visible: true,
  drawBehind: false,
  hideOnScroll: false,
  noBorder: true, // no border for ios
  elevation: 0, // no border for android
  title: {
    alignment: 'center',
    fontSize: 16,
  },
  background: {
    color: 'white',
  },
};

class NavigationUtils {
  sideMenuVisible = false;

  currentScreenId = '';

  showingOverlay = false;

  constructor() {
    Navigation.events().registerComponentDidAppearListener(({ componentId }) => {
      if (
        componentId === 'inAppNotification' ||
        componentId === 'defaultOverlay' ||
        componentId === 'AlertOverlay' ||
        componentId === 'PromptOverlay' ||
        componentId === 'DatePickerOverlay' ||
        componentId === 'CompleteOrderOverlay' ||
        componentId === 'TransferRecordOverlay'
      ) {
        return;
      }
      this.currentScreenId = componentId;
    });

    Navigation.events().registerComponentDidDisappearListener(({ componentId }) => {
      if (componentId === SIDE_MENU_ID) {
        this.sideMenuVisible = false;
      }
    });

    Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
      if (buttonId === 'backBtt') {
        Navigation.pop(this.currentScreenId);
      }
      if (buttonId === 'closeBtt') {
        this.dismissModal();
      }
    });

    this.allowPush = true;
    this.allowModal = true;
  }

  openSideMenu() {
    this.sideMenuVisible = true;
    Navigation.mergeOptions(SIDE_MENU_ID, {
      sideMenu: {
        left: {
          visible: true,
          enabled: true,
        },
      },
    });
  }

  closeSideMenu() {
    this.sideMenuVisible = false;
    Navigation.mergeOptions(SIDE_MENU_ID, {
      sideMenu: {
        left: {
          visible: false,
          enabled: true,
        },
      },
    });
  }

  toggleSizeMenu() {
    this.sideMenuVisible = !this.sideMenuVisible;
    Navigation.mergeOptions(SIDE_MENU_ID, {
      sideMenu: {
        left: {
          visible: this.sideMenuVisible,
          enabled: true,
        },
      },
    });
  }

  mergeOptions(option) {
    Navigation.mergeOptions(this.currentScreenId, option);
  }

  startLoginContent() {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Login',
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      },
    });
  }

  startMainContent() {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Home',
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      },
    });
  }

  startProfile() {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Profile',
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      },
    });
  }

  push({
    screen,
    title,
    subtitle,
    subtitleColor,
    passProps,
    topBarComponent,
    isBack = true,
    isTopBarEnable = true,
    leftButtons,
    rightButtons,
    noBorder = true,
    isBottomTabsEnable = false,
  }) {
    if (this.allowPush) {
      Navigation.push(this.currentScreenId, {
        component: {
          name: screen,
          passProps,
          options: {
            popGesture: true,
            bottomTabs: {
              visible: isBottomTabsEnable,
              drawBehind: !isBottomTabsEnable,
            },
            topBar: {
              visible: isTopBarEnable,
              drawBehind: !isTopBarEnable,
              noBorder: true,
              elevation: 0,
              title: {
                text: title,
                alignment: 'center',
                fontSize: 18,
                fontWeight: 'regular',
                color: 'black',
              },
              subtitle: {
                text: subtitle,
                alignment: 'center',
                fontSize: 14,
                fontWeight: 'regular',
                color: subtitleColor,
              },
              buttonColor: 'red',
            },
          },
        },
      });
      this.allowPush = false;
      setTimeout(() => {
        this.allowPush = true;
      }, 1500);
    }
  }

  pop = () => {
    Navigation.pop(this.currentScreenId);
  };

  showModal = ({ screen, title, isClose, isSave, rightButtons = [], passProps }) => {
    if (isSave) {
      rightButtons = [
        {
          id: 'doneBtt',
          text: 'Save',
          color: 'black',
        },
      ];
    }
    if (this.allowModal) {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: screen,
                passProps,
                options: {
                  topBar: {
                    visible: true,
                    noBorder: true,
                    drawBehind: true,
                    elevation: 0,
                    buttonColor: 'black',
                    title: {
                      text: title,
                      alignment: 'center',
                      fontSize: 16,
                    },
                  },
                  modalPresentationStyle: 'fullScreen',
                },
              },
            },
          ],
        },
      });
      this.allowModal = false;
      setTimeout(() => {
        this.allowModal = true;
      }, 1500);
    }
  };

  dismissModal() {
    Navigation.dismissModal(this.currentScreenId);
  }

  showLoading = () => {
    Navigation.showModal({
      component: {
        name: 'Loading',
        options: {
          overlay: {
            interceptTouchOutside: false,
          },
          layout: {
            componentBackgroundColor: 'transparent',
            backgroundColor: 'transparent',
          },
          screenBackgroundColor: 'transparent',
          modalPresentationStyle: SCREEN_OVERLAY[Platform.OS],
          animations: {
            showModal: {
              enabled: false,
            },
            dismissModal: {
              enable: false,
              enabled: false,
            },
          },
        },
      },
    });
  };

  dismissLoading = () => {
    Navigation.dismissModal(this.currentScreenId, {
      animations: {
        showModal: {
          enabled: false,
        },
        dismissModal: {
          enable: false,
          enabled: false,
        },
      },
    });
  };

  resetTo = (componentId, { isTopBarEnable, title }) => {
    Navigation.setStackRoot(this.homeScreen, {
      component: {
        name: componentId,
        options: {
          animations: {
            setStackRoot: {
              enable: false,
            },
          },
          topBar: {
            visible: isTopBarEnable,
            title: {
              text: title,
            },
            buttonColor: 'black',
          },
          layout: {
            backgroundColor: 'white',
            orientation: ['landscape'], // An array of supported orientations
          },
        },
      },
    });
  };

  showInAppNotification = ({ title, content, type, duration, isAutoDismiss }) => {
    if (this.showingOverlay) {
      Navigation.dismissOverlay('inAppNotification');
    }
    this.showingOverlay = true;
    Navigation.showOverlay({
      component: {
        id: 'inAppNotification',
        name: 'InAppNotification',
        passProps: {
          title,
          content,
          type,
          duration,
          isAutoDismiss,
        },
        options: {
          overlay: {
            interceptTouchOutside: false,
          },
        },
      },
    });
  };

  dismissInAppNotification = () => {
    this.showingOverlay = false;
    Navigation.dismissOverlay('inAppNotification');
  };

  showOverlay = ({ screen, interceptTouchOutside, id = 'defaultOverlay', passProps }) => {
    Navigation.showOverlay({
      component: {
        name: screen,
        id: id,
        passProps: passProps,
        options: {
          overlay: {
            interceptTouchOutside: interceptTouchOutside || false,
          },
          layout: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            componentBackgroundColor: 'rgba(0,0,0,0.5)',
          },
        },
      },
    });
  };

  dismissOverlay = (id) => {
    Navigation.dismissOverlay(id);
  };
}

export default new NavigationUtils();
