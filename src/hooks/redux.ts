import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RooteState } from "../store";

export const useAppSelector: TypedUseSelectorHook<RooteState> = useSelector
