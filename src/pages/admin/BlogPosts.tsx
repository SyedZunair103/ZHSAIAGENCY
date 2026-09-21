import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, BookOpen, Globe, EyeOff } from "lucide-react";
import { useBlogPosts, type BlogPost } from "../../hooks/useBlogPosts";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import EmptyState from "../../components/admin/EmptyState";
import Badge from "../../components/admin/Badge";
import ConfirmDialog from "../../components/admin/ConfirmDialog";
import { showToast } from "../../components/admin/Toast";

export default function BlogPosts() {
  const { data: posts, isLoading, error, remove, publish, unpublish } = useBlogPosts();
  const [deleteTarget, setDeleteTarget] = useState<BlogPost | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      await remove(deleteTarget.id);
      showToast("success", `"${deleteTarget.title}" deleted.`);
      setDeleteTarget(null);
    } catch (e) {
      showToast("error", e instanceof Error ? e.message : "Delete failed.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      if (post.status === "published") {
        await unpublish(post.id);
        showToast("success", `"${post.title}" unpublished.`);
      } else {
        await publish(post.id);
        showToast("success", `"${post.title}" published.`);
      }
    } catch (e) {
      showToast("error", e instanceof Error ? e.message : "Update failed.");
    }
  };

  const isPublished = (status: string) => status === "published";

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
              Blog Posts
            </h1>
            <p className="text-sm dark:text-zhs-muted text-slate-500">
              Manage the blog posts displayed on your website.
            </p>
          </div>
        </div>
        <Link
          to="/admin/blog/new"
          className="inline-flex items-center gap-2 rounded-xl bg-zhs-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zhs-accent-3"
        >
          <Plus className="h-4 w-4" />
          New Post
        </Link>
      </div>

      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="rounded-xl border border-zhs-rose/30 bg-zhs-rose/10 px-4 py-3 text-sm text-zhs-rose">
          Error: {error}
        </div>
      )}

      {!isLoading && !error && posts.length === 0 && (
        <EmptyState
          icon={<BookOpen className="h-8 w-8" />}
          title="No blog posts yet"
          description="Create your first blog post to get started."
          action={
            <Link
              to="/admin/blog/new"
              className="inline-flex items-center gap-2 rounded-xl bg-zhs-accent px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Plus className="h-4 w-4" />
              Create Post
            </Link>
          }
        />
      )}

      {!isLoading && !error && posts.length > 0 && (
        <div className="overflow-hidden rounded-2xl border dark:border-zhs-border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/50 bg-slate-50">
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Title
                </th>
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Status
                </th>
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Published
                </th>
                <th className="px-4 py-3 text-right font-medium dark:text-zhs-muted text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b dark:border-zhs-border/50 border-slate-100 transition-colors hover:dark:bg-zhs-dark-3/30 hover:bg-slate-50"
                >
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium dark:text-zhs-white text-slate-900">
                        {post.title}
                      </p>
                      {post.excerpt && (
                        <p className="max-w-md truncate text-xs dark:text-zhs-muted text-slate-500">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={isPublished(post.status) ? "success" : "warning"}>
                      {isPublished(post.status) ? "Published" : "Draft"}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs dark:text-zhs-muted text-slate-500">
                    {post.published_at
                      ? new Date(post.published_at).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1">
                      <button
                        onClick={() => handleTogglePublish(post)}
                        title={isPublished(post.status) ? "Unpublish" : "Publish"}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg dark:text-zhs-muted dark:hover:text-zhs-emerald text-slate-400 hover:text-emerald-600 transition-colors"
                      >
                        {isPublished(post.status) ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Globe className="h-4 w-4" />
                        )}
                      </button>
                      <Link
                        to={`/admin/blog/${post.id}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg dark:text-zhs-muted dark:hover:text-zhs-accent text-slate-400 hover:text-indigo-600 transition-colors"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => setDeleteTarget(post)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg dark:text-zhs-muted dark:hover:text-zhs-rose text-slate-400 hover:text-rose-600 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Blog Post"
        message={`Are you sure you want to delete "${deleteTarget?.title}"? This cannot be undone.`}
        isLoading={isDeleting}
      />
    </div>
  );
}
