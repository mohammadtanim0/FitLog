import { CheckCircle2, Info, XCircle, X } from 'lucide-react';
import { useEffect } from 'react';
import { useFitLog } from '../context/FitLogContext';

export default function Toast() {
  const { toast, setToast } = useFitLog();

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(timer);
  }, [toast, setToast]);

  if (!toast) return null;
  const Icon = toast.type === 'error' ? XCircle : toast.type === 'info' ? Info : CheckCircle2;
  return (
    <div className={`toast ${toast.type}`} role="status">
      <Icon size={18} />
      <span>{toast.message}</span>
      <button onClick={() => setToast(null)} aria-label="Close notification"><X size={16} /></button>
    </div>
  );
}
