interface EmptyStateProps {
    title: string;
    message: string;
    icon?: "calendar" | "error";
}

export function EmptyState({ title, message, icon = "calendar" }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                {icon === "error" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(229,41,74,0.6)" strokeWidth="1.5" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                )}
            </div>
            <h3 className="text-sm font-semibold text-white/60 mb-1">{title}</h3>
            <p className="text-xs text-white/30 max-w-xs leading-relaxed">{message}</p>
        </div>
    );
}