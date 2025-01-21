export const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
            <div
                key={i}
                className="h-[250px] animate-pulse rounded-lg bg-white/5 backdrop-blur-sm"
            />
        ))}
    </div>
);
