import type { AppDispatch, RootSate } from "../store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch