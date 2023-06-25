import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PatientsScreen,
  PatientInfoScreen,
  AddEditPatientScreen,
  PatientScreen,
} from "../screens/Patients";
import {
  ConsultationInfoScreen,
  AddEditConsultationScreen,
} from "../screens/Consultations";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function PatientStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screen.patient.patients} component={PatientsScreen} />
      <Stack.Screen name={screen.patient.patient} component={PatientScreen} />
      <Stack.Screen name={screen.search.search} component={SearchScreen} />
      <Stack.Screen
        name={screen.patient.addEditPatient}
        component={AddEditPatientScreen}
      />
    </Stack.Navigator>
  );
}
