import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountScreen,
  MyConsultationsScreen,
  MyConsultationScreen,
} from "../screens/Account";
import {
  ConsultScreen,
  ConsultationInfoScreen,
  ConsultationsScreen,
} from "../screens/Consultations";
import {
  PatientsScreen,
  PatientScreen,
  AddEditPatientScreen,
} from "../screens/Patients";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screen.account.home} component={AccountScreen} />
      <Stack.Screen
        name={screen.consultation.myConsultations}
        component={MyConsultationsScreen}
      />
      <Stack.Screen
        name={screen.consultation.myConsultation}
        component={MyConsultationScreen}
      />
      <Stack.Screen
        name={screen.patient.consultationInfo}
        component={ConsultationInfoScreen}
      />
    </Stack.Navigator>
  );
}
