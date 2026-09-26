import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const FitLogContext = createContext(null);
const PLAN_KEY = 'fitlog-plan';
const SAVED_KEY = 'fitlog-saved';

function readStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState(readStorage(PLAN_KEY));
  const [saved, setSaved] = useState(readStorage(SAVED_KEY));
  const [toast, setToast] = useState(null);

  useEffect(() => localStorage.setItem(PLAN_KEY, JSON.stringify(plan)), [plan]);
  useEffect(() => localStorage.setItem(SAVED_KEY, JSON.stringify(saved)), [saved]);

  function notify(message, type = 'success') {
    setToast({ message, type, id: Date.now() });
  }

  function addToPlan(workout) {
    if (plan.some((item) => item.id === workout.id)) {
      notify('Already in today’s plan', 'info');
      return false;
    }
    if (plan.length >= 5) {
      notify('Today’s plan is full — maximum 5 lifts', 'error');
      return false;
    }
    setPlan((current) => [...current, { ...workout, done: false }]);
    notify('Added to today’s plan');
    return true;
  }

  function removeFromPlan(id) {
    setPlan((current) => current.filter((item) => item.id !== id));
    notify('Removed from today’s plan');
  }

  function toggleDone(id) {
    setPlan((current) => current.map((item) => item.id === id ? { ...item, done: !item.done } : item));
    notify('Workout status updated');
  }

  function saveForLater(workout) {
    if (saved.some((item) => item.id === workout.id)) {
      notify('Already saved', 'info');
      return false;
    }
    setSaved((current) => [...current, workout]);
    notify('Saved for later');
    return true;
  }

  function removeSaved(id) {
    setSaved((current) => current.filter((item) => item.id !== id));
    notify('Removed from saved');
  }

  const value = useMemo(() => ({
    plan,
    saved,
    toast,
    setToast,
    addToPlan,
    removeFromPlan,
    toggleDone,
    saveForLater,
    removeSaved,
  }), [plan, saved, toast]);

  return <FitLogContext.Provider value={value}>{children}</FitLogContext.Provider>;
}

export function useFitLog() {
  const context = useContext(FitLogContext);
  if (!context) throw new Error('useFitLog must be used inside FitLogProvider');
  return context;
}
