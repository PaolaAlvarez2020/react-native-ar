import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PatientsScreen,
  PatientInfoScreen,
  AddEditPatientScreen,
} from "../screens/Patients";
import {
  ConsultationInfoScreen,
  AddEditConsultationScreen,
  ConsultationsScreen,
  ConsultScreen,
} from "../screens/Consultations";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function ConsultationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={screen.consultation.consultations}
        component={ConsultationsScreen}
      />
      <Stack.Screen
        name={screen.consultation.consult}
        component={ConsultScreen}
      />
      <Stack.Screen
        name={screen.consultation.addEditConsultation}
        component={AddEditConsultationScreen}
      />
      <Stack.Screen name={screen.search.search} component={SearchScreen} />
    </Stack.Navigator>
  );
}
